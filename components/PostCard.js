'use client';

import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className="border rounded p-4 shadow mb-4">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-sm text-gray-500">
        Por {post.author} - {post.date}
      </p>
      {/* Link que redirige a la página del post de anders*/}
      <Link href={`/post/${post.id}`} className="text-blue-500 underline">
        Leer más
      </Link>
    </div>
  );
}
