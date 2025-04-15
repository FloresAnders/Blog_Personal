import prisma from '@/lib/prisma';

export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: { id: 'desc' },
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
    },
  });

  return Response.json(newPost, { status: 201 });
}
