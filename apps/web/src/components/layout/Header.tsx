import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-yellow-500">🍌</span>
            <span className="text-xl font-bold text-gray-900">Bananas</span>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Ürün ara..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full">
                  <UserIcon className="h-6 w-6 text-gray-700" />
                  <span className="hidden sm:block text-sm font-medium">{user.name}</span>
                </button>
                
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profilim</Link>
                  <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100">Siparişlerim</Link>
                  <button onClick={logout} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">
                    Çıkış Yap
                  </button>
                </div>
              </div>
            ) : (
              <Link href="/login" className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition">
                <UserIcon className="h-5 w-5" />
                <span className="hidden sm:block">Giriş</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
