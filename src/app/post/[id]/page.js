import prisma from '@/lib/prisma';
import Link from 'next/link';
import DeleteButton from '@/components/DeleteButton';

export default async function PostPage({ params }) {
  const postId = parseInt(params.id, 10);

  const post = await prisma.post.findUnique({
    where: { id: postId },
  });

  if (!post) {
    return <div className="p-8 text-xl">Post no encontrado 😢</div>;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        Por {post.author} - {post.date}
      </p>
      <p>{post.content}</p>
      <div className="mt-4 flex items-center">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Volver atrás
        </Link>
        {/* Aquí se agrega el botón de eliminar */}
        <DeleteButton postId={postId} />
      </div>
    </main>
  );
}
