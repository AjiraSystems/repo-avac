import { CircleCheck as CheckCircle, Users, BookOpen, Award, Globe, Briefcase, Heart, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const benefits = [
  {
    icon: BookOpen,
    title: 'Capacitación Continua',
    description: 'Acceso a programas de formación especializados impartidos por expertos del sector con certificaciones internacionales.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Award,
    title: 'Certificaciones Reconocidas',
    description: 'Obtén certificados que cumplen con estándares ICAO y son reconocidos internacionalmente en la aviación civil.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Users,
    title: 'Networking Profesional',
    description: 'Conecta con profesionales del sector, participa en eventos exclusivos y expande tu red de contactos.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Globe,
    title: 'Alcance Internacional',
    description: 'Acceso a convenios internacionales y oportunidades de colaboración con asociaciones aeronáuticas globales.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Briefcase,
    title: 'Bolsa de Trabajo',
    description: 'Acceso exclusivo a ofertas laborales en el sector aeronáutico, tanto nacional como internacionalmente.',
    color: 'from-rose-500 to-rose-600',
  },
  {
    icon: TrendingUp,
    title: 'Desarrollo Profesional',
    description: 'Impulsa tu carrera con herramientas, recursos y mentoria de profesionales experimentados del sector.',
    color: 'from-purple-500 to-purple-600',
  },
];

const requirements = [
  'Ser mayor de 18 años',
  'Contar con formación o experiencia en aviación civil',
  'Cumplir con los requisitos de afiliación establecidos por AVAC',
  'Aceptar los estatutos y código de ética de la asociación',
  'Cumplir con el pago de la membresía anual',
];

const membershipPlans = [
  {
    name: 'Estudiante',
    price: 30,
    currency: '$',
    period: 'anual',
    features: [
      'Acceso a cursos educativos',
      'Acceso a eventos mensuales',
      'Certificado de participación',
      'Soporte por email',
    ],
  },
  {
    name: 'Profesional',
    price: 150,
    currency: '$',
    period: 'anual',
    featured: true,
    features: [
      'Todo de Estudiante',
      'Certificaciones avanzadas',
      'Acceso a bolsa de trabajo',
      'Descuentos en eventos',
      'Revista profesional trimestral',
      'Soporte prioritario',
    ],
  },
  {
    name: 'Corporativo',
    price: 500,
    currency: '$',
    period: 'anual',
    features: [
      'Todo de Profesional',
      'Hasta 5 miembros de equipo',
      'Descuentos especiales en cursos',
      'Asesoría técnica dedicada',
      'Presencia en directorio corporativo',
      'Soporte VIP 24/7',
    ],
  },
];

export default function BeneficiosPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-4">Ventajas de Ser Miembro</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white font-poppins mb-6">Beneficios de Afiliación</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light">
            Descubre todos los beneficios y oportunidades que AVAC ofrece a sus miembros profesionales.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-8 hover:shadow-lg hover:border-blue-200 transition-all group">
                <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} mb-5 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 font-poppins mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3">Requisitos</p>
              <h2 className="text-4xl font-bold text-white font-poppins mb-8">¿Quién puede afiliarse?</h2>
              <div className="space-y-4">
                {requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-100 font-light">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-white">
                <Shield className="h-16 w-16 mb-6 text-blue-300" />
                <h3 className="text-2xl font-bold font-poppins mb-4">Afiliación Segura</h3>
                <p className="text-blue-100 font-light leading-relaxed mb-6">
                  Tu información está protegida bajo los estándares de privacidad de AVAC. Somos una organización reconocida y regulada conforme a las normas internacionales de aviación civil.
                </p>
                <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-medium">
                  <Link href="/login">Iniciar Registro</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Planes de Membresía</p>
            <h2 className="text-4xl font-bold text-gray-900 font-poppins">Elige tu Plan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-3xl overflow-hidden transition-all ${
                  plan.featured
                    ? 'ring-2 ring-blue-500 scale-105 shadow-2xl bg-gradient-to-b from-white to-blue-50'
                    : 'bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg'
                }`}
              >
                {plan.featured && (
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 text-center text-sm font-semibold">
                    MÁS POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 font-poppins">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 my-6">
                    <span className="text-5xl font-bold text-gray-900 font-poppins">{plan.currency}{plan.price}</span>
                    <span className="text-gray-500 font-light">/{plan.period}</span>
                  </div>

                  <Button
                    asChild
                    className={`w-full rounded-xl font-medium mb-8 ${
                      plan.featured
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    <Link href="/login">Seleccionar Plan</Link>
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, fi) => (
                      <div key={fi} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 font-light">
              ¿Preguntas sobre membresía?{' '}
              <Link href="/asesoria" className="text-blue-600 hover:text-blue-700 font-medium">
                Contacta con nuestro equipo
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
