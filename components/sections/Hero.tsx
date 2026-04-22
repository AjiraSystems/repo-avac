'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Plane } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2574&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center lg:text-left w-full">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-poppins tracking-tight">
            Impulsando la<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Aviación Civil Venezolana</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl font-light">
            Uniendo profesionales del sector aeronáutico, promoviendo estándares de excelencia y contribuyendo al desarrollo sostenible de la industria.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all group"
            >
              <Link href="/inscripcion">
                Inscribirse Ahora
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full px-8 py-6 text-base font-medium transition-all"
            >
              <Link href="/presentacion">Conoce Más</Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 max-w-2xl">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white font-poppins">500+</div>
              <div className="text-sm text-gray-300 mt-1">Miembros</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white font-poppins">25+</div>
              <div className="text-sm text-gray-300 mt-1">Años</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white font-poppins">100+</div>
              <div className="text-sm text-gray-300 mt-1">Eventos</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent" />
    </section>
  );
}
