'use client';

import { useEffect, useState } from 'react';
import PostCard from '@/components/PostCard';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">📚 Blog con Next.js</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
