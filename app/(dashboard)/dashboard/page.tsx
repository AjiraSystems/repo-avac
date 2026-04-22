import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { BookOpen, CreditCard, Award, TrendingUp, Clock, CircleCheck as CheckCircle } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Cursos Activos', value: '3', icon: BookOpen, color: 'from-blue-500 to-blue-600', change: '+1 este mes' },
  { label: 'Cursos Completados', value: '7', icon: CheckCircle, color: 'from-emerald-500 to-emerald-600', change: '+2 este año' },
  { label: 'Certificaciones', value: '4', icon: Award, color: 'from-amber-500 to-amber-600', change: 'Vigentes' },
  { label: 'Pagos Pendientes', value: '1', icon: CreditCard, color: 'from-rose-500 to-rose-600', change: 'Vence en 5 días' },
];

const recentCourses = [
  { id: 1, title: 'Seguridad Operacional OACI', progress: 75, deadline: '2024-04-30', status: 'En progreso' },
  { id: 2, title: 'Regulaciones Aeronáuticas Venezolanas', progress: 40, deadline: '2024-05-15', status: 'En progreso' },
  { id: 3, title: 'Meteorología para Pilotos Avanzado', progress: 10, deadline: '2024-06-01', status: 'Iniciado' },
];

const recentActivity = [
  { action: 'Completaste el módulo 3 de Seguridad Operacional', time: 'Hace 2 horas' },
  { action: 'Descargaste el certificado de Normativas Básicas', time: 'Ayer' },
  { action: 'Realizaste el pago de membresía anual', time: 'Hace 3 días' },
  { action: 'Te inscribiste en el curso de Meteorología Avanzada', time: 'Hace 1 semana' },
];

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader title="Dashboard" subtitle="Bienvenido de vuelta, Carlos" />
      <main className="flex-1 p-6 space-y-6 overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-xs text-gray-400 font-light">{stat.change}</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 font-poppins">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1 font-light">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base font-semibold text-gray-900 font-poppins">Cursos en Progreso</h2>
              <Link href="/dashboard/cursos" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                Ver todos
              </Link>
            </div>
            <div className="space-y-5">
              {recentCourses.map((course) => (
                <div key={course.id} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <Link
                      href={`/dashboard/cursos/${course.id}`}
                      className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors"
                    >
                      {course.title}
                    </Link>
                    <span className="text-xs text-gray-400 font-light flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {new Date(course.deadline).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 font-medium w-8 text-right">{course.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base font-semibold text-gray-900 font-poppins">Actividad Reciente</h2>
              <TrendingUp className="h-4 w-4 text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-700 font-light leading-snug">{item.action}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
