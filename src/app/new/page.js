'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewPostPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      router.push('/');
    } else {
      alert('Error al publicar el post');
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Crear nuevo post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <textarea
          name="content"
          placeholder="Contenido"
          value={formData.content}
          onChange={handleChange}
          className="border p-2 rounded"
          rows={5}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={formData.author}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Publicar
        </button>
      </form>
      <Link href="/" className="text-blue-500 underline mt-4 block">
        ← Volver al inicio
      </Link>
    </main>
  );
}
