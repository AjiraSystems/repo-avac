import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { CreditCard, Download, CircleCheck as CheckCircle, Clock, CircleAlert as AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const payments = [
  {
    id: 'PAY-2024-001',
    description: 'Membresía Anual AVAC 2024',
    amount: 150.00,
    date: '2024-01-15',
    status: 'paid',
    method: 'Tarjeta de crédito',
  },
  {
    id: 'PAY-2024-002',
    description: 'Inscripción: Seguridad Operacional OACI',
    amount: 85.00,
    date: '2024-02-01',
    status: 'paid',
    method: 'Transferencia bancaria',
  },
  {
    id: 'PAY-2024-003',
    description: 'Inscripción: Regulaciones Aeronáuticas Venezolanas',
    amount: 65.00,
    date: '2024-02-20',
    status: 'paid',
    method: 'Tarjeta de crédito',
  },
  {
    id: 'PAY-2024-004',
    description: 'Inscripción: Meteorología para Pilotos Avanzado',
    amount: 95.00,
    date: '2024-04-01',
    status: 'pending',
    method: 'Pendiente',
  },
];

const statusConfig = {
  paid: { label: 'Pagado', icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  pending: { label: 'Pendiente', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
  failed: { label: 'Fallido', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
};

export default function PagosPage() {
  const total = payments.filter((p) => p.status === 'paid').reduce((acc, p) => acc + p.amount, 0);
  const pending = payments.filter((p) => p.status === 'pending').reduce((acc, p) => acc + p.amount, 0);

  return (
    <>
      <DashboardHeader title="Pagos" subtitle="Historial y gestión de pagos" />
      <main className="flex-1 p-6 space-y-6 overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500 font-light">Total Pagado</span>
              <CheckCircle className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 font-poppins">${total.toFixed(2)}</div>
            <p className="text-xs text-gray-400 mt-1 font-light">Este año</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500 font-light">Pendiente</span>
              <Clock className="h-4 w-4 text-amber-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 font-poppins">${pending.toFixed(2)}</div>
            <p className="text-xs text-gray-400 mt-1 font-light">Por pagar</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500 font-light">Transacciones</span>
              <CreditCard className="h-4 w-4 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 font-poppins">{payments.length}</div>
            <p className="text-xs text-gray-400 mt-1 font-light">Total registradas</p>
          </div>
        </div>

        {pending > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-amber-800">Tienes pagos pendientes</p>
                <p className="text-xs text-amber-700 font-light mt-0.5">Completa tu pago para acceder al contenido del curso.</p>
              </div>
            </div>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs flex-shrink-0">
              Pagar Ahora
            </Button>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900 font-poppins">Historial de Pagos</h2>
          </div>
          <div className="divide-y divide-gray-50">
            {payments.map((payment) => {
              const status = statusConfig[payment.status as keyof typeof statusConfig];
              return (
                <div key={payment.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 flex-shrink-0">
                      <CreditCard className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{payment.description}</p>
                      <p className="text-xs text-gray-400 font-light mt-0.5">
                        {payment.id} · {new Date(payment.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color}`}>
                      <status.icon className="h-3 w-3" />
                      {status.label}
                    </span>
                    <span className="text-sm font-semibold text-gray-900 w-16 text-right">${payment.amount.toFixed(2)}</span>
                    {payment.status === 'paid' && (
                      <button className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors" title="Descargar recibo">
                        <Download className="h-4 w-4" />
                      </button>
                    )}
                    {payment.status === 'pending' && (
                      <Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-xs">
                        Pagar
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
