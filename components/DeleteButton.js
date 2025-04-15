'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DeleteButton({ postId }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      const res = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        // Redirigir a la página principal luego de eliminar
        router.push('/');
      } else {
        alert('Error al eliminar el post');
      }
    } catch (error) {
      alert('Error al eliminar el post');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-red-500 hover:text-red-700 ml-4"
    >
      {isDeleting ? 'Eliminando...' : 'Eliminar Post'}
    </button>
  );
}
