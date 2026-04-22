import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Newsletter from '@/components/sections/Newsletter';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Users, BookOpen, Briefcase, ArrowRight } from 'lucide-react';

const quickLinks = [
  {
    icon: BookOpen,
    title: 'Actualidad',
    description: 'Noticias y tendencias del sector aeronáutico venezolano',
    href: '/actualidad',
  },
  {
    icon: Users,
    title: 'Directorio',
    description: 'Conecta con profesionales de aviación civil registrados',
    href: '/directorio',
  },
  {
    icon: Briefcase,
    title: 'Beneficios',
    description: 'Descubre todas las ventajas de ser miembro de AVAC',
    href: '/beneficios',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Explora AVAC</p>
            <h2 className="text-4xl font-bold text-gray-900 font-poppins">Acceso Rápido</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer h-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 mb-4 group-hover:scale-110 transition-transform">
                    <link.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 font-poppins mb-2">{link.title}</h3>
                  <p className="text-gray-600 text-sm font-light mb-4">{link.description}</p>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                    Ir a {link.title}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Informa</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-6">
            Mantente Informado
          </h2>
          <p className="text-lg text-gray-600 font-light mb-8">
            Suscríbete a nuestro boletín para recibir las últimas noticias y oportunidades del sector aeronáutico venezolano directamente en tu correo.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full px-8 py-6 text-base font-medium shadow-md hover:shadow-lg transition-all">
              <Link href="/actualidad">
                Ver Todas las Noticias
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
