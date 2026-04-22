'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Loader as Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const advisoryServices = [
  {
    title: 'Consultoría Técnica',
    description: 'Asesoramiento especializado en normativas, seguridad operacional y mejores prácticas aeronáuticas.',
    icon: '⚙️',
  },
  {
    title: 'Formación Corporativa',
    description: 'Programas personalizados de capacitación para equipos y empresas del sector aeronáutico.',
    icon: '📚',
  },
  {
    title: 'Cumplimiento Normativo',
    description: 'Apoyo en la implementación y cumplimiento de regulaciones nacionales e internacionales.',
    icon: '✅',
  },
  {
    title: 'Evaluación de Riesgos',
    description: 'Análisis y evaluación de riesgos operacionales en organizaciones aeronáuticas.',
    icon: '🔍',
  },
];

const contactInfo = [
  { icon: Phone, label: 'Teléfono', value: '+58 212 XXX XXXX' },
  { icon: Mail, label: 'Email', value: 'asesoria@avac.org.ve' },
  { icon: MapPin, label: 'Oficina', value: 'Caracas, Venezuela' },
  { icon: Clock, label: 'Horario', value: 'Lunes a Viernes, 8:30am - 5:00pm' },
];

export default function AsesoriaPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Mensaje enviado correctamente. Nos contactaremos pronto.');
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      } else {
        toast.error('Error al enviar el mensaje. Intenta nuevamente.');
      }
    } catch {
      toast.error('Error de conexión. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

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
          <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-4">Apoyo Profesional</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white font-poppins mb-6">Asesoría</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light">
            Contamos con un equipo especializado listo para asesorarte en temas técnicos, normativas y desarrollo profesional.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryServices.map((service, i) => (
              <div key={i} className="rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6 hover:shadow-lg transition-all text-center">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-gray-900 font-poppins mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Información de Contacto</p>
              <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-12">Ponte en Contacto</h2>

              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                      <p className="text-lg font-semibold text-gray-900 mt-1">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-blue-50 border border-blue-200">
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Respuesta Rápida</p>
                    <p className="text-sm text-gray-600 font-light mt-1">
                      Nuestro equipo responde dentro de 24 horas a todos los inquiries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-6">Formulario de Consulta</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Nombre Completo
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="mt-2 h-11 border-gray-200 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="mt-2 h-11 border-gray-200 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+58 412 XXXX"
                      className="mt-2 h-11 border-gray-200 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Empresa/Institución
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    className="mt-2 h-11 border-gray-200 focus:border-blue-500"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                    Servicio de Interés
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full h-11 px-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-sm"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="consultoría">Consultoría Técnica</option>
                    <option value="capacitación">Formación Corporativa</option>
                    <option value="normativas">Cumplimiento Normativo</option>
                    <option value="riesgos">Evaluación de Riesgos</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu consulta..."
                    required
                    className="mt-2 min-h-32 border-gray-200 focus:border-blue-500 resize-none"
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
                      Enviando...
                    </>
                  ) : (
                    'Enviar Consulta'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
