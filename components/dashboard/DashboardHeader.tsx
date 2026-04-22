'use client';

import { Bell, Search } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
}

export default function DashboardHeader({ title, subtitle }: DashboardHeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-10">
      <div>
        <h1 className="text-lg font-semibold text-gray-900 font-poppins">{title}</h1>
        {subtitle && <p className="text-xs text-gray-500 font-light">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar..."
            className="pl-9 h-9 w-48 text-sm border-gray-200 focus:border-blue-400 rounded-full"
          />
        </div>

        <button className="relative p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full" />
        </button>

        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xs font-semibold">
              CR
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-900">Carlos Rodríguez</p>
            <p className="text-xs text-gray-500 font-light">Miembro Activo</p>
          </div>
        </div>
      </div>
    </header>
  );
}
