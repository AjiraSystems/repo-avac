import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Comunidad Profesional',
    description: 'Red de profesionales comprometidos con la excelencia en la aviación civil venezolana.',
  },
  {
    icon: Target,
    title: 'Misión Clara',
    description: 'Promover el desarrollo sostenible y la seguridad en todas las operaciones aéreas.',
  },
  {
    icon: Award,
    title: 'Capacitación Continua',
    description: 'Programas de formación y actualización para mantener los más altos estándares.',
  },
  {
    icon: Shield,
    title: 'Compromiso con la Seguridad',
    description: 'Priorizamos la seguridad operacional en cada aspecto de la aviación civil.',
  },
];

export default function About() {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 space-y-4">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Quiénes Somos
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 font-poppins">
            AVAC: Liderando la Aviación Civil
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Una organización dedicada a promover la excelencia, la seguridad y el desarrollo sostenible en el sector aeronáutico venezolano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
