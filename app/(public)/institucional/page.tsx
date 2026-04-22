import { Plane, Target, Eye, Heart, Users, Award } from 'lucide-react';

const coreValues = [
  {
    icon: Target,
    title: 'Misión',
    description: 'Impulsar el desarrollo sostenible de la aviación civil venezolana, promoviendo capacitación continua, seguridad operacional e integración de la comunidad aeronáutica con estándares internacionales.',
  },
  {
    icon: Eye,
    title: 'Visión',
    description: 'Ser la organización líder en Venezuela que agrupe a profesionales de aviación civil, reconocida internacionalmente por su compromiso con la excelencia operacional y el desarrollo profesional continuo.',
  },
  {
    icon: Heart,
    title: 'Valores',
    description: 'Excelencia, Integridad, Colaboración, Innovación y Responsabilidad social. Comprometidos con los más altos estándares de seguridad y ética profesional.',
  },
];

const team = [
  { name: 'Carlos Rodríguez', role: 'Presidente', specialty: 'Piloto Comercial' },
  { name: 'María González', role: 'Vicepresidenta', specialty: 'Ingeniera Aeronáutica' },
  { name: 'Andrés Pérez', role: 'Secretario General', specialty: 'Control de Tráfico Aéreo' },
  { name: 'Luisa Martínez', role: 'Tesorera', specialty: 'Administración Aeroportuaria' },
];

const milestones = [
  { year: '1998', event: 'Fundación de AVAC en Caracas, Venezuela.' },
  { year: '2005', event: 'Afiliación a la Asociación Latinoamericana de Aviación Civil.' },
  { year: '2012', event: 'Lanzamiento del programa de certificaciones profesionales.' },
  { year: '2018', event: 'Apertura de la plataforma digital de formación en línea.' },
  { year: '2024', event: 'Más de 500 miembros activos en todo el país.' },
];

export default function InstitucionalPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2340&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-4">Nuestra Organización</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white font-poppins mb-6">
            Institucional
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Conoce la historia, misión y valores que guían a AVAC en su compromiso con la aviación civil venezolana.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((item, i) => (
              <div key={i} className="rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 mb-5">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-poppins mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Historia</p>
            <h2 className="text-4xl font-bold text-gray-900 font-poppins">Nuestra Trayectoria</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1 text-right">
                    {i % 2 === 0 && (
                      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm inline-block text-left max-w-sm">
                        <div className="text-blue-600 font-bold text-lg font-poppins mb-1">{m.year}</div>
                        <p className="text-gray-600 text-sm font-light">{m.event}</p>
                      </div>
                    )}
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md flex-shrink-0" />
                  <div className="flex-1">
                    {i % 2 !== 0 && (
                      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm inline-block max-w-sm">
                        <div className="text-blue-600 font-bold text-lg font-poppins mb-1">{m.year}</div>
                        <p className="text-gray-600 text-sm font-light">{m.event}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Equipo Directivo</p>
            <h2 className="text-4xl font-bold text-gray-900 font-poppins">Junta Directiva</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group text-center p-8 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold font-poppins">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-gray-900 font-poppins">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mt-1">{member.role}</p>
                <p className="text-gray-500 text-xs mt-2 font-light">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
