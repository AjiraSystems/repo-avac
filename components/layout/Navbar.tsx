'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Plane } from 'lucide-react';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Institucional', href: '/institucional' },
  { name: 'Actualidad', href: '/actualidad' },
  { name: 'Directorio', href: '/directorio' },
  { name: 'Beneficios', href: '/beneficios' },
  { name: 'Asesoría', href: '/asesoria' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-sm shadow-sm'
          : 'bg-gradient-to-b from-black/30 to-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
          <div className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
            scrolled ? 'bg-gradient-to-br from-blue-500 to-blue-700' : 'bg-white/20 group-hover:bg-white/30'
          }`}>
            <Plane className="h-5 w-5 text-white" />
          </div>
          <span className={`text-lg font-bold font-poppins transition-colors duration-300 ${
            scrolled ? 'text-slate-900' : 'text-white'
          }`}>
            AVAC
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors whitespace-nowrap ${
                scrolled
                  ? 'text-slate-700 hover:text-blue-600'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            asChild
            className={`rounded-full px-6 py-2 font-medium transition-all ${
              scrolled
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md'
                : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/20'
            }`}
          >
            <Link href="/login">Ingresar</Link>
          </Button>
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-md p-2 transition-colors ${
              scrolled ? 'text-slate-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Abrir menú</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="space-y-1 px-6 pb-6 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full font-medium"
              >
                <Link href="/login">Ingresar</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
