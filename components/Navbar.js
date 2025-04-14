'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo o título */}
        <div className="text-white font-bold text-xl">
          <Link href="/">Mi Blog</Link>
        </div>
        {/* Enlaces de navegación */}
        <div className="flex gap-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Inicio
          </Link>
          <Link href="/new" className="text-gray-300 hover:text-white">
            Nuevo Post
          </Link>
        </div>
      </div>
    </nav>
  );
}
