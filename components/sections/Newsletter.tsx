'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <div className="flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-md rounded-full mx-auto mb-6 border border-white/20">
          <Mail className="h-7 w-7 text-white" />
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 font-poppins">
          Mantente Informado
        </h2>
        <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
          Suscríbete a nuestro boletín informativo y recibe las últimas noticias, eventos y oportunidades directamente en tu correo.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-12 px-5 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-blue-200 rounded-lg focus:bg-white/15 focus:border-white/40 transition-all"
          />
          <Button
            type="submit"
            className="bg-white text-blue-900 hover:bg-blue-50 h-12 px-7 font-medium rounded-lg group transition-all shadow-lg hover:shadow-xl"
          >
            Suscribirse
            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        <p className="text-xs text-blue-200 mt-5 font-light">
          Al suscribirte, aceptas recibir comunicaciones de AVAC. Puedes cancelar en cualquier momento.
        </p>
      </div>
    </section>
  );
}
