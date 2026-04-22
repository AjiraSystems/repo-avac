'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Plane,
  LayoutDashboard,
  BookOpen,
  CreditCard,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Bell,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Mis Cursos', href: '/dashboard/cursos', icon: BookOpen },
  { label: 'Pagos', href: '/dashboard/pagos', icon: CreditCard },
  { label: 'Mi Perfil', href: '/dashboard/perfil', icon: User },
];

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'relative flex flex-col bg-slate-900 text-white transition-all duration-300 h-screen sticky top-0',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className={cn('flex items-center h-16 px-4 border-b border-slate-800', collapsed ? 'justify-center' : 'gap-3')}>
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex-shrink-0">
          <Plane className="h-4 w-4 text-white" />
        </div>
        {!collapsed && (
          <span className="font-bold text-base font-poppins">AVAC</span>
        )}
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all',
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800',
                collapsed && 'justify-center'
              )}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-slate-800 space-y-1">
        <Link
          href="/"
          className={cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-all',
            collapsed && 'justify-center'
          )}
          title={collapsed ? 'Cerrar Sesión' : undefined}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span>Cerrar Sesión</span>}
        </Link>
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 bg-slate-800 border border-slate-700 text-slate-400 hover:text-white rounded-full p-1 shadow-md transition-colors"
      >
        {collapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
      </button>
    </aside>
  );
}
