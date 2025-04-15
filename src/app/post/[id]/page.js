import prisma from '@/lib/prisma';
import Link from 'next/link';
import DeleteButton from '@/components/DeleteButton';

export default async function PostPage({ params }) {
  console.log('[📦] Cargando página individual del post...');
  console.log('[🔍] params:', params);

  if (!params || !params.id) {
    console.error('[❌] No se recibió el parámetro id en params.');
    return <div className="p-8 text-xl text-red-400">Error: Parámetro no encontrado</div>;
  }

  const postId = parseInt(params.id, 10);
  console.log('[🧾] ID del post:', postId);

  let post;
  try {
    post = await prisma.post.findUnique({
      where: { id: postId },
    });
  } catch (err) {
    console.error('[❌] Error al consultar la base de datos:', err);
    return <div className="p-8 text-xl text-red-400">Error al buscar el post</div>;
  }

  if (!post) {
    console.warn('[⚠️] Post no encontrado con ID:', postId);
    return <div className="p-8 text-xl text-gray-400">Post no encontrado 😢</div>;
  }

  console.log('[✅] Post encontrado:', post);

  return (
    <main className="p-8 bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
        <div className="flex items-center text-sm text-gray-400 mb-6">
          <span>Por {post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
        <div className="prose prose-invert text-gray-300 mb-8">
          <p>{post.content}</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
            Volver atrás
          </Link>
          <DeleteButton postId={postId} />
        </div>
      </div>
    </main>
  );
}