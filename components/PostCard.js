'use client';

import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className="bg-blue-950 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-400 mb-2">{post.title}</h2>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <span>Por {post.author}</span>
        <span className="mx-2">•</span>
        <span>{post.date}</span>
      </div>
      <Link href={`/post/${post.id}`} className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
        Leer más
      </Link>
    </div>
  );
}