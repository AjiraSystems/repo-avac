import Link from 'next/link';
import { Plane } from 'lucide-react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col">
      <header className="py-6 px-8">
        <Link href="/" className="inline-flex items-center space-x-3 group">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700">
            <Plane className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold font-poppins text-slate-900">AVAC</span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        {children}
      </main>

      <footer className="py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} AVAC - Asociación Venezolana de Aviación Civil
      </footer>
    </div>
  );
}
