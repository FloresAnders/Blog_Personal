import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UpdateButton({ postId, initialData }) {
  const router = useRouter();
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      router.push('/');
    } else {
      alert('Error al actualizar el post');
    }
  };

  return (
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
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Actualizar Post</button>
    </form>
  );
}