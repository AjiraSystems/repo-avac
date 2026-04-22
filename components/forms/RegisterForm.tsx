'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Loader as Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profession: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">Nombre</Label>
          <Input
            id="firstName"
            placeholder="Carlos"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            required
            className="h-11 border-gray-200 focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Apellido</Label>
          <Input
            id="lastName"
            placeholder="Rodríguez"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            required
            className="h-11 border-gray-200 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">Correo electrónico</Label>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="h-11 border-gray-200 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="profession" className="text-sm font-medium text-gray-700">Profesión aeronáutica</Label>
        <Input
          id="profession"
          placeholder="Ej: Piloto Comercial, Ingeniero Aeronáutico..."
          value={form.profession}
          onChange={(e) => setForm({ ...form, profession: e.target.value })}
          className="h-11 border-gray-200 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium text-gray-700">Contraseña</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Mínimo 8 caracteres"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            className="h-11 pr-11 border-gray-200 focus:border-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirmar contraseña</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Repite tu contraseña"
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
          required
          className="h-11 border-gray-200 focus:border-blue-500"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-11 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creando cuenta...
          </>
        ) : (
          'Crear Cuenta'
        )}
      </Button>

      <p className="text-center text-sm text-gray-500">
        ¿Ya tienes cuenta?{' '}
        <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
          Inicia sesión
        </Link>
      </p>
    </form>
  );
}
