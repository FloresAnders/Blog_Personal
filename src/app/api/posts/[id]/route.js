import prisma from '@/lib/prisma';

export async function DELETE(request, { params }) {
  console.log('🔍 Recibido DELETE request con params:', params);

  const postId = parseInt(params.id, 10);
  console.log('🧾 ID del post a eliminar:', postId);

  if (isNaN(postId)) {
    return new Response(JSON.stringify({ error: 'ID inválido' }), {
      status: 400,
    });
  }

  try {
    const deletedPost = await prisma.post.delete({
      where: { id: postId },
    });

    console.log('✅ Post eliminado:', deletedPost);

    return new Response(JSON.stringify({ message: 'Post eliminado exitosamente' }), {
      status: 200,
    });
  } catch (error) {
    console.error('❌ Error al eliminar post:', error);

    return new Response(JSON.stringify({ error: 'Error al eliminar el post' }), {
      status: 500,
    });
  }
}

export async function PUT(request, { params }) {
    console.log('🔍 Recibido PUT request con params:', params);
    const postId = parseInt(params.id, 10);
    console.log('🧾 ID del post a actualizar:', postId);

    if (isNaN(postId)) {
        return new Response(JSON.stringify({ error: 'ID inválido' }), {
            status: 400,
        });
    }

    try{
    const updatePost = await prisma.post.update({
        where: { id: postId },
        data: await request.json(),
    });
    console.log('✅ Post actualizado:', updatePost);
    return new Response(JSON.stringify({ message: 'Post actualizado exitosamente' }), {
        status: 200,
    });
    }
    catch (error) {
        console.error('❌ Error al actualizar post:', error);
        return new Response(JSON.stringify({ error: 'Error al actualizar el post' }), {
            status: 500,
        });
    }

}

