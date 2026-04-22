import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const news = [
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
  {
    id: 4,
    title: 'Programa de Becas para Estudiantes de Aviación',
    excerpt: 'AVAC lanza nuevo programa de becas para apoyar a jóvenes venezolanos que desean forjarse una carrera en la aviación.',
    date: '2024-02-28',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
    category: 'Educación',
  },
  {
    id: 5,
    title: 'Foro Nacional de Aviación Civil Venezuela 2024',
    excerpt: 'El evento más importante del sector aeronáutico nacional reúne a líderes, operadores y reguladores del país.',
    date: '2024-02-20',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    category: 'Eventos',
  },
  {
    id: 6,
    title: 'Certificaciones ICAO: Nuevos Requisitos 2024',
    excerpt: 'La organización de aviación civil internacional actualiza sus estándares de certificación para pilotos y técnicos.',
    date: '2024-02-15',
    image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=800&auto=format&fit=crop',
    category: 'Normativas',
  },
];

const categories = ['Todos', 'Convenios', 'Eventos', 'Normativas', 'Educación'];

export default function ActualidadPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2340&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-4">Actualidad y Tendencias</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white font-poppins mb-6">Actualidad</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light">
            Mantente al día con las últimas novedades, tendencias y eventos del sector aeronáutico venezolano e internacional.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2 rounded-full text-sm font-medium border border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col h-full rounded-2xl bg-white border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3 font-medium">
                    <Calendar className="h-3.5 w-3.5 mr-2" />
                    {new Date(item.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-grow mb-4 font-light">{item.excerpt}</p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 justify-start group/btn text-sm font-medium" asChild>
                    <Link href={`/actualidad/${item.id}`}>
                      Leer más
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
