import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, FileText, Users, Briefcase, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: GraduationCap,
    title: 'Capacitación y Formación',
    description: 'Programas de formación continua, seminarios y talleres especializados para profesionales de la aviación.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FileText,
    title: 'Asesoría Técnica',
    description: 'Consultoría especializada en normativas, regulaciones y mejores prácticas de aviación civil.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Users,
    title: 'Networking Profesional',
    description: 'Eventos, conferencias y encuentros para conectar profesionales del sector aeronáutico.',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Briefcase,
    title: 'Bolsa de Trabajo',
    description: 'Plataforma de oportunidades laborales y desarrollo profesional en el sector aeronáutico.',
    color: 'from-blue-600 to-blue-700',
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 space-y-4">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Nuestros Servicios
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 font-poppins">
            Áreas de Atención
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Ofrecemos servicios integrales diseñados para apoyar el crecimiento y desarrollo profesional de nuestros miembros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-300`} />

              <div className="relative z-10">
                <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
                  {service.description}
                </p>
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 p-0 group/btn text-sm font-medium"
                  asChild
                >
                  <Link href="/areas">
                    Conoce más
                    <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/areas">
              Ver Todas las Áreas de Atención
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
