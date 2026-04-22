import LoginForm from '@/components/forms/LoginForm';
import { Plane } from 'lucide-react';

export const metadata = {
  title: 'Iniciar Sesión - AVAC',
  description: 'Accede a tu cuenta de la Asociación Venezolana de Aviación Civil',
};

export default function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mx-auto mb-5 shadow-lg">
            <Plane className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 font-poppins">Bienvenido de vuelta</h1>
          <p className="text-gray-500 text-sm mt-2 font-light">
            Ingresa tus credenciales para acceder al portal de miembros
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
