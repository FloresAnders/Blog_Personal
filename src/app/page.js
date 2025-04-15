'use client';

import { useEffect, useState } from 'react';
import PostCard from '@/components/PostCard';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
      });
  }, []);

  useEffect(() => {
    if (search === '') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [search, posts]);

  return (
    <>
      <Navbar onSearch={(value) => setSearch(value)} />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">📚 Blog con Next.js</h1>
        <div className="grid gap-4">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}
