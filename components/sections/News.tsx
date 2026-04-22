import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const newsItems = [
  {
    id: 1,
    title: 'Nuevo Convenio Internacional de Colaboración',
    excerpt: 'AVAC firma acuerdo con asociaciones internacionales para fortalecer la capacitación de pilotos y personal aeronáutico.',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=800&auto=format&fit=crop',
    category: 'Convenios',
  },
  {
    id: 2,
    title: 'Seminario de Seguridad Operacional 2024',
    excerpt: 'Evento anual reunirá a expertos nacionales e internacionales para discutir las últimas tendencias en seguridad aérea.',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=800&auto=format&fit=crop',
    category: 'Eventos',
  },
  {
    id: 3,
    title: 'Actualización de Normativas Aeronáuticas',
    excerpt: 'Nuevas regulaciones entran en vigor para mejorar los estándares de seguridad en la aviación civil venezolana.',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=800&auto=format&fit=crop',
    category: 'Normativas',
  },
];

export default function News() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 space-y-4">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Actualidad
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 font-poppins">
            Últimas Noticias
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Mantente informado sobre las novedades, eventos y logros de la aviación civil en Venezuela.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col h-full rounded-2xl bg-white border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-semibold rounded-full shadow-lg">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center text-xs text-gray-500 mb-3 font-medium">
                  <Calendar className="h-3.5 w-3.5 mr-2" />
                  {new Date(item.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-grow mb-4 font-light">
                  {item.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 p-0 justify-start group/btn text-sm font-medium"
                  asChild
                >
                  <Link href={`/boletin/${item.id}`}>
                    Leer más
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-white border-2 border-gray-200 text-gray-900 hover:border-blue-500 hover:bg-blue-50 rounded-full px-8 py-6 text-base font-medium transition-all"
          >
            <Link href="/boletin">
              Ver Todas las Noticias
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
