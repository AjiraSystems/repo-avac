'use client';

import { useState } from 'react';
import { Search, MapPin, Briefcase, Mail, Phone, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const professionals = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    specialty: 'Piloto Comercial',
    location: 'Caracas',
    email: 'carlos.rodriguez@example.com',
    phone: '+58 412 XXX XXXX',
    experience: '15 años',
  },
  {
    id: 2,
    name: 'María González',
    specialty: 'Ingeniera Aeronáutica',
    location: 'Maracaibo',
    email: 'maria.gonzalez@example.com',
    phone: '+58 414 XXX XXXX',
    experience: '12 años',
  },
  {
    id: 3,
    name: 'Andrés Pérez',
    specialty: 'Control de Tráfico Aéreo',
    location: 'Barcelona',
    email: 'andres.perez@example.com',
    phone: '+58 416 XXX XXXX',
    experience: '10 años',
  },
  {
    id: 4,
    name: 'Luisa Martínez',
    specialty: 'Administración Aeroportuaria',
    location: 'Valencia',
    email: 'luisa.martinez@example.com',
    phone: '+58 412 XXX XXXX',
    experience: '8 años',
  },
  {
    id: 5,
    name: 'Roberto Silva',
    specialty: 'Técnico de Mantenimiento Aeronáutico',
    location: 'Caracas',
    email: 'roberto.silva@example.com',
    phone: '+58 414 XXX XXXX',
    experience: '18 años',
  },
  {
    id: 6,
    name: 'Isabel Fernández',
    specialty: 'Piloto Comercial',
    location: 'Coro',
    email: 'isabel.fernandez@example.com',
    phone: '+58 416 XXX XXXX',
    experience: '7 años',
  },
];

const specialties = ['Todas', 'Piloto Comercial', 'Ingeniera Aeronáutica', 'Control de Tráfico Aéreo', 'Administración Aeroportuaria', 'Técnico de Mantenimiento'];

export default function DirectorioPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('Todas');

  const filtered = professionals.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'Todas' || p.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <main className="min-h-screen pt-20">
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-4">Red de Profesionales</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white font-poppins mb-6">Directorio de Agremieados</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light">
            Conecta con profesionales del sector aeronáutico venezolano. Busca expertos en tu especialidad y amplía tu red de contactos.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Buscar por nombre o ciudad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 border-gray-200 focus:border-blue-400 text-base rounded-xl"
              />
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-600">Especialidad:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {specialties.map((spec) => (
                <button
                  key={spec}
                  onClick={() => setSelectedSpecialty(spec)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedSpecialty === spec
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">
              {filtered.length} Profesional{filtered.length !== 1 ? 'es' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
            </h2>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((prof) => (
                <div key={prof.id} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 font-poppins">{prof.name}</h3>
                      <div className="flex items-center gap-1.5 text-blue-600 text-sm font-medium mt-1">
                        <Briefcase className="h-4 w-4" />
                        {prof.specialty}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 font-medium">Experiencia</div>
                      <div className="text-sm font-semibold text-gray-900">{prof.experience}</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      {prof.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <a href={`mailto:${prof.email}`} className="hover:text-blue-600 transition-colors">
                        {prof.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Phone className="h-4 w-4 text-gray-400" />
                      {prof.phone}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs rounded-lg border-gray-200"
                      asChild
                    >
                      <a href={`mailto:${prof.email}`}>Contactar</a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs rounded-lg"
                    >
                      Ver Perfil
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 font-light">No se encontraron profesionales con los criterios seleccionados.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
