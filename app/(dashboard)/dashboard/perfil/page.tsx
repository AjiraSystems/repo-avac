import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { User, Mail, Phone, MapPin, Briefcase, Award, CreditCard as Edit2, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const certifications = [
  { name: 'Normativas Básicas de Aviación Civil', date: '2024-02-28', expiry: '2026-02-28' },
  { name: 'Gestión de Recursos del Vuelo (CRM)', date: '2024-01-15', expiry: '2026-01-15' },
  { name: 'Seguridad Operacional Nivel I', date: '2023-11-10', expiry: '2025-11-10' },
];

export default function PerfilPage() {
  return (
    <>
      <DashboardHeader title="Mi Perfil" subtitle="Gestiona tu información personal" />
      <main className="flex-1 p-6 space-y-6 overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
              <div className="relative inline-block mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl font-bold font-poppins">
                    CR
                  </AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white shadow-md hover:bg-blue-700 transition-colors">
                  <Camera className="h-3.5 w-3.5 text-white" />
                </button>
              </div>
              <h2 className="text-lg font-bold text-gray-900 font-poppins">Carlos Rodríguez</h2>
              <p className="text-blue-600 text-sm font-medium mt-1">Piloto Comercial</p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                Miembro Activo
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 font-poppins mb-4">Certificaciones</h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                    <div className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium text-gray-800 leading-snug">{cert.name}</p>
                        <p className="text-xs text-gray-400 font-light mt-0.5">Vence: {new Date(cert.expiry).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900 font-poppins">Información Personal</h3>
                <Button size="sm" variant="outline" className="text-xs rounded-lg border-gray-200 gap-1.5">
                  <Edit2 className="h-3 w-3" />
                  Editar
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</Label>
                  <Input defaultValue="Carlos" className="h-10 border-gray-200 bg-gray-50 text-sm" readOnly />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</Label>
                  <Input defaultValue="Rodríguez" className="h-10 border-gray-200 bg-gray-50 text-sm" readOnly />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="h-3 w-3" />Correo
                  </Label>
                  <Input defaultValue="carlos.rodriguez@email.com" className="h-10 border-gray-200 bg-gray-50 text-sm" readOnly />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="h-3 w-3" />Teléfono
                  </Label>
                  <Input defaultValue="+58 412 XXX XXXX" className="h-10 border-gray-200 bg-gray-50 text-sm" readOnly />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Briefcase className="h-3 w-3" />Profesión
                  </Label>
                  <Input defaultValue="Piloto Comercial" className="h-10 border-gray-200 bg-gray-50 text-sm" readOnly />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" />Ciudad
                  </Label>
                  <Input defaultValue="Caracas, Venezuela" className="h-10 border-gray-200 bg-gray-50 text-sm" readOnly />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900 font-poppins">Seguridad</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Contraseña</p>
                    <p className="text-xs text-gray-400 font-light mt-0.5">Última actualización hace 3 meses</p>
                  </div>
                  <Button size="sm" variant="outline" className="text-xs rounded-lg border-gray-200">
                    Cambiar
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Autenticación de dos factores</p>
                    <p className="text-xs text-gray-400 font-light mt-0.5">No configurada</p>
                  </div>
                  <Button size="sm" className="text-xs rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0">
                    Activar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
