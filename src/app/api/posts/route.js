import prisma from '@/lib/prisma';

export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: { id: 'desc' }
  });
  return Response.json(posts);
}

export async function POST(request) {
  const data = await request.json();

  const newPost = await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      author: data.author,
      date: new Date().toISOString().split('T')[0],
    }
  });

  return Response.json(newPost, { status: 201 });
}

export async function DELETE(request, { params }) {
  // Extraemos el id del post de los parámetros de la URL
  const postId = parseInt(params.id, 10);

  try {
    // Eliminamos el post de la base de datos
    const post = await prisma.post.delete({
      where: { id: postId },
    });

    // Devolvemos una respuesta de éxito
    return new Response(JSON.stringify({ message: 'Post eliminado exitosamente' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al eliminar el post' }), { status: 500 });
  }
}
