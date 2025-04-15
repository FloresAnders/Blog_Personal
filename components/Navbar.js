'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Llamamos al padre
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">Mi Blog</Link>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleChange}
            className="p-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link href="/new" className="text-gray-300 hover:text-white"> //TODO mas bonito
            Nuevo Post
          </Link>
        </div>
      </div>
    </nav>
  );
}
