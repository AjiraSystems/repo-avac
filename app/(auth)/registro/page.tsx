import RegisterForm from '@/components/forms/RegisterForm';
import { Plane } from 'lucide-react';

export const metadata = {
  title: 'Registro - AVAC',
  description: 'Crea tu cuenta y únete a la Asociación Venezolana de Aviación Civil',
};

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mx-auto mb-5 shadow-lg">
            <Plane className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 font-poppins">Crear una cuenta</h1>
          <p className="text-gray-500 text-sm mt-2 font-light">
            Únete a la comunidad de profesionales de la aviación civil venezolana
          </p>
        </div>

        <RegisterForm />
      </div>
    </div>
  );
}
