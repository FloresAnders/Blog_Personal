import prisma from '@/lib/prisma';
import Link from 'next/link';
import DeleteButton from '@/components/DeleteButton';

export default async function PostPage({ params }) {
  console.log('[📦] Cargando página individual del post...');
  console.log('[🔍] params:', params);

  // Verificamos si params existe y contiene id
  if (!params || !params.id) {
    console.error('[❌] No se recibió el parámetro id en params.');
    return <div className="p-8 text-xl text-red-600">Error: Parámetro no encontrado</div>;
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
    return <div className="p-8 text-xl text-red-600">Error al buscar el post</div>;
  }

  if (!post) {
    console.warn('[⚠️] Post no encontrado con ID:', postId);
    return <div className="p-8 text-xl">Post no encontrado 😢</div>;
  }

  console.log('[✅] Post encontrado:', post);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        Por {post.author} - {post.date}
      </p>
      <p>{post.content}</p>
      <div className="mt-4 flex items-center gap-4">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Volver atrás
        </Link>
        <DeleteButton postId={postId} />
      </div>
    </main>
  );
}
