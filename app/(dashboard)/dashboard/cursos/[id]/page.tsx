import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Play, CircleCheck as CheckCircle, Lock, ChevronLeft, Clock, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const modules = [
  { id: 1, title: 'Introducción a la Seguridad Operacional', duration: '45 min', completed: true },
  { id: 2, title: 'Marco Normativo OACI', duration: '60 min', completed: true },
  { id: 3, title: 'Identificación y Gestión de Riesgos', duration: '90 min', completed: true },
  { id: 4, title: 'Sistemas de Reporte de Incidentes', duration: '50 min', completed: true },
  { id: 5, title: 'Factores Humanos en la Aviación', duration: '75 min', completed: true },
  { id: 6, title: 'Cultura de Seguridad Organizacional', duration: '60 min', completed: true },
  { id: 7, title: 'Indicadores de Desempeño de Seguridad', duration: '55 min', completed: false },
  { id: 8, title: 'Evaluación y Certificación Final', duration: '120 min', completed: false },
];

export default function CursoDetailPage({ params }: { params: { id: string } }) {
  const completedCount = modules.filter((m) => m.completed).length;
  const progress = Math.round((completedCount / modules.length) * 100);

  return (
    <>
      <DashboardHeader title="Seguridad Operacional OACI" subtitle="Mis Cursos / Seguridad Operacional OACI" />
      <main className="flex-1 p-6 overflow-auto">
        <div className="mb-6">
          <Link href="/dashboard/cursos" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium">
            <ChevronLeft className="h-4 w-4" />
            Volver a Mis Cursos
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">Seguridad</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 font-poppins mb-2">Seguridad Operacional OACI</h2>
              <p className="text-gray-600 text-sm font-light leading-relaxed mb-5">
                Curso completo sobre los estándares internacionales de seguridad operacional de la Organización de Aviación Civil Internacional, incluyendo marcos normativos, gestión de riesgos y cultura de seguridad.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-blue-500" />{modules.length} módulos</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-blue-500" />~9 horas</span>
                <span className="flex items-center gap-1.5"><Award className="h-4 w-4 text-blue-500" />Certificado al completar</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 font-poppins mb-5">Módulos del Curso</h3>
              <div className="space-y-3">
                {modules.map((mod, index) => {
                  const isCurrent = !mod.completed && (index === 0 || modules[index - 1]?.completed);
                  const isLocked = !mod.completed && !isCurrent;
                  return (
                    <div
                      key={mod.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                        mod.completed
                          ? 'border-emerald-100 bg-emerald-50/50'
                          : isCurrent
                          ? 'border-blue-200 bg-blue-50/50'
                          : 'border-gray-100 bg-gray-50/50 opacity-60'
                      }`}
                    >
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 ${
                        mod.completed ? 'bg-emerald-500' : isCurrent ? 'bg-blue-500' : 'bg-gray-300'
                      }`}>
                        {mod.completed ? (
                          <CheckCircle className="h-4 w-4 text-white" />
                        ) : isCurrent ? (
                          <Play className="h-3.5 w-3.5 text-white ml-0.5" />
                        ) : (
                          <Lock className="h-3.5 w-3.5 text-white" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 truncate">{mod.title}</p>
                        <p className="text-xs text-gray-500 font-light">{mod.duration}</p>
                      </div>
                      {(mod.completed || isCurrent) && (
                        <Button size="sm" variant={mod.completed ? 'outline' : 'default'} className={`text-xs rounded-lg flex-shrink-0 ${!mod.completed ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0' : ''}`}>
                          {mod.completed ? 'Revisar' : 'Comenzar'}
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 font-poppins mb-4">Tu Progreso</h3>
              <div className="text-center mb-5">
                <div className="text-4xl font-bold text-gray-900 font-poppins">{progress}%</div>
                <p className="text-sm text-gray-500 font-light mt-1">{completedCount} de {modules.length} módulos</p>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl text-sm font-medium">
                <Play className="mr-2 h-4 w-4" />
                Continuar Módulo 7
              </Button>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <Award className="h-8 w-8 mb-3 text-blue-100" />
              <h3 className="font-semibold font-poppins mb-1">Certificado</h3>
              <p className="text-blue-100 text-sm font-light mb-4">
                Completa todos los módulos para obtener tu certificado oficial AVAC.
              </p>
              <div className="bg-white/20 rounded-xl p-3 text-center">
                <p className="text-xs text-blue-100">Faltan {modules.length - completedCount} módulos</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
