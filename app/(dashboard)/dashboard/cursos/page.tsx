import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { BookOpen, Clock, ChevronRight, Play, CircleCheck as CheckCircle, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'Seguridad Operacional OACI',
    description: 'Estándares internacionales de seguridad operacional de la OACI.',
    progress: 75,
    totalModules: 8,
    completedModules: 6,
    deadline: '2024-04-30',
    status: 'active',
    category: 'Seguridad',
  },
  {
    id: 2,
    title: 'Regulaciones Aeronáuticas Venezolanas',
    description: 'Marco normativo y regulatorio del INAC y la aviación civil venezolana.',
    progress: 40,
    totalModules: 10,
    completedModules: 4,
    deadline: '2024-05-15',
    status: 'active',
    category: 'Normativa',
  },
  {
    id: 3,
    title: 'Meteorología para Pilotos Avanzado',
    description: 'Interpretación avanzada de fenómenos meteorológicos para operaciones de vuelo.',
    progress: 10,
    totalModules: 12,
    completedModules: 1,
    deadline: '2024-06-01',
    status: 'active',
    category: 'Técnico',
  },
  {
    id: 4,
    title: 'Normativas Básicas de Aviación Civil',
    description: 'Fundamentos del marco regulatorio de la aviación civil internacional.',
    progress: 100,
    totalModules: 6,
    completedModules: 6,
    deadline: '2024-02-28',
    status: 'completed',
    category: 'Normativa',
  },
  {
    id: 5,
    title: 'Gestión de Recursos del Vuelo (CRM)',
    description: 'Trabajo en equipo y comunicación efectiva en cabina de vuelo.',
    progress: 100,
    totalModules: 7,
    completedModules: 7,
    deadline: '2024-01-15',
    status: 'completed',
    category: 'Habilidades',
  },
  {
    id: 6,
    title: 'Sistemas de Gestión de Seguridad (SMS)',
    description: 'Implementación y gestión de sistemas de seguridad en operadores aéreos.',
    progress: 0,
    totalModules: 9,
    completedModules: 0,
    deadline: '2024-07-01',
    status: 'locked',
    category: 'Seguridad',
  },
];

const categoryColors: Record<string, string> = {
  Seguridad: 'bg-blue-100 text-blue-700',
  Normativa: 'bg-amber-100 text-amber-700',
  Técnico: 'bg-emerald-100 text-emerald-700',
  Habilidades: 'bg-rose-100 text-rose-700',
};

export default function CursosPage() {
  const active = courses.filter((c) => c.status === 'active');
  const completed = courses.filter((c) => c.status === 'completed');
  const locked = courses.filter((c) => c.status === 'locked');

  return (
    <>
      <DashboardHeader title="Mis Cursos" subtitle="Gestiona tu formación profesional" />
      <main className="flex-1 p-6 space-y-8 overflow-auto">
        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">En Progreso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {active.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-blue-200 hover:shadow-md transition-all group">
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[course.category]}`}>
                    {course.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {new Date(course.deadline).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 font-poppins mb-1 text-sm">{course.title}</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed mb-4">{course.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{course.completedModules}/{course.totalModules} módulos</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
                <Button asChild size="sm" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-xs group/btn">
                  <Link href={`/dashboard/cursos/${course.id}`}>
                    <Play className="mr-1.5 h-3 w-3" />
                    Continuar
                    <ChevronRight className="ml-auto h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Completados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {completed.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl border border-gray-100 p-5 opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[course.category]}`}>
                    {course.category}
                  </span>
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                </div>
                <h3 className="font-semibold text-gray-900 font-poppins mb-1 text-sm">{course.title}</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed mb-4">{course.description}</p>
                <Button asChild size="sm" variant="outline" className="w-full rounded-lg text-xs border-gray-200">
                  <Link href={`/dashboard/cursos/${course.id}`}>
                    Ver Certificado
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Próximos Cursos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {locked.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl border border-dashed border-gray-200 p-5 opacity-60">
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[course.category]}`}>
                    {course.category}
                  </span>
                  <Lock className="h-4 w-4 text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-900 font-poppins mb-1 text-sm">{course.title}</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed mb-4">{course.description}</p>
                <Button size="sm" variant="outline" className="w-full rounded-lg text-xs border-gray-200" disabled>
                  Disponible próximamente
                </Button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
