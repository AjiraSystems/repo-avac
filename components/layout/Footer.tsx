import Link from 'next/link';
import { Plane, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  navegacion: [
    { name: 'Inicio', href: '/' },
    { name: 'Carta de Presentación', href: '/presentacion' },
    { name: 'Galería', href: '/galeria' },
    { name: 'Áreas de Atención', href: '/areas' },
  ],
  recursos: [
    { name: 'Boletín Informativo', href: '/boletin' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Inscripción', href: '/inscripcion' },
    { name: 'Preguntas Frecuentes', href: '/faq' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white font-poppins">AVAC</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-6">
              Asociación Venezolana de Aviación Civil, promoviendo la excelencia y el desarrollo sostenible en la aviación.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Navegación</h3>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-500">Caracas, Venezuela</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0 mt-1" />
                <a href="mailto:info@avac.org.ve" className="text-sm text-gray-500 hover:text-white transition-colors">
                  info@avac.org.ve
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0 mt-1" />
                <a href="tel:+58212XXXXXXX" className="text-sm text-gray-500 hover:text-white transition-colors">
                  +58 (212) XXX-XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-xs text-center text-gray-600">
            © {new Date().getFullYear()} AVAC - Asociación Venezolana de Aviación Civil. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
