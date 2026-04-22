# Roadmap del Proyecto AVAC - Próximas Fases

## Fase 1: Autenticación y Base de Datos (PRÓXIMA)
**Duración**: 1-2 semanas
**Dependencia**: Nada (comienza inmediatamente)

### Tareas
- [ ] Crear tablas Supabase (users, courses, enrollments, modules, payments)
- [ ] Habilitar RLS en todas las tablas
- [ ] Crear políticas de seguridad
- [ ] Integrar Supabase Auth en LoginForm y RegisterForm
- [ ] Crear middleware de protección de rutas
- [ ] Implementar logout real
- [ ] Crear context de autenticación
- [ ] Seed de datos iniciales (4-5 cursos)

### Archivos a Modificar
```
components/forms/LoginForm.tsx (integrar Supabase Auth)
components/forms/RegisterForm.tsx (integrar Supabase Auth)
lib/supabase.ts (crear cliente)
middleware.ts (crear middleware de rutas)
providers/AuthProvider.tsx (crear context)
```

### Resultado
- Login/Registro funcional con Supabase Auth
- Rutas /dashboard protegidas
- Datos reales desde Supabase

---

## Fase 2: Contenido de Cursos y Módulos
**Duración**: 1-2 semanas
**Dependencia**: Fase 1 (Auth)

### Tareas
- [ ] Implementar reproductor de video en módulos
- [ ] Crear sistema de quiz/evaluaciones
- [ ] Marcar módulos como completados
- [ ] Actualizar progreso de cursos
- [ ] Crear vista de módulo completo (contenido, video, quiz)
- [ ] Generar certificados al completar curso
- [ ] Guardar progreso en tiempo real

### Archivos Nuevos
```
components/course/VideoPlayer.tsx
components/course/Quiz.tsx
components/course/ModuleContent.tsx
lib/course-service.ts (funciones de progreso)
```

### Resultado
- Cursos completamente funcionales
- Progreso rastreado en BD
- Evaluaciones con calificaciones

---

## Fase 3: Sistema de Pagos (Stripe)
**Duración**: 1-2 semanas
**Dependencia**: Fase 1 (Auth)

### Tareas
- [ ] Integrar Stripe SDK
- [ ] Crear checkout modal/página
- [ ] Implementar Payment Intent
- [ ] Crear webhook para confirmaciones
- [ ] Actualizar estado de pago en BD
- [ ] Enviar email de confirmación
- [ ] Crear recibos en PDF
- [ ] Generar factura automática

### Archivos Nuevos
```
supabase/functions/create-payment-intent/index.ts
supabase/functions/payment-webhook/index.ts
lib/stripe-service.ts
components/checkout/CheckoutModal.tsx
components/checkout/PaymentForm.tsx
```

### Resultado
- Pagos completamente funcionales
- Stripe integrado y testado
- Emails transaccionales

---

## Fase 4: Certificados y Documentos
**Duración**: 1 semana
**Dependencia**: Fase 2 (Cursos)

### Tareas
- [ ] Integrar librería para generar PDFs (PDFKit o similar)
- [ ] Diseñar template de certificado
- [ ] Generar certificados automáticamente al completar curso
- [ ] Almacenar PDFs en Supabase Storage
- [ ] Crear página de descarga de certificados
- [ ] Validar certificados con número único
- [ ] Enviar certificado por email

### Archivos Nuevos
```
lib/certificate-service.ts
components/certificate/CertificateDownload.tsx
supabase/functions/generate-certificate/index.ts
```

### Resultado
- Certificados generados automáticamente
- Descargables y enviables por email
- Sistema de validación

---

## Fase 5: Notificaciones y Emails
**Duración**: 1 semana
**Dependencia**: Todas las fases anteriores

### Tareas
- [ ] Configurar SendGrid o similar
- [ ] Crear templates de email
- [ ] Email de bienvenida al registrarse
- [ ] Email de confirmación de pago
- [ ] Email recordatorio de progreso del curso
- [ ] Email cuando se completa un módulo
- [ ] Email con certificado al terminar
- [ ] In-app notifications (toast)

### Archivos Nuevos
```
lib/email-service.ts
supabase/functions/send-email/index.ts
lib/email-templates.ts
```

### Resultado
- Sistema completo de notificaciones
- Emails profesionales y personalizados
- User engagement mejorado

---

## Fase 6: Reportes y Analytics
**Duración**: 1 semana
**Dependencia**: Fase 1 (Auth) mínimo

### Tareas
- [ ] Integrar Google Analytics o Posthog
- [ ] Crear dashboard de admin
- [ ] Reportes de usuarios registrados
- [ ] Reportes de cursos completados
- [ ] Reportes de ingresos por mes
- [ ] Reportes de tasa de retención
- [ ] Gráficos interactivos con Recharts
- [ ] Exportar reportes a CSV/PDF

### Archivos Nuevos
```
app/(admin)/admin/reports/page.tsx
app/(admin)/admin/users/page.tsx
app/(admin)/admin/revenue/page.tsx
components/admin/ReportChart.tsx
lib/analytics.ts
```

### Resultado
- Dashboard de administración
- Métricas clave visibles
- Análisis de negocio

---

## Fase 7: Testing y QA
**Duración**: 2 semanas
**Dependencia**: Todas las fases anteriores

### Tareas
- [ ] Tests unitarios (Vitest)
- [ ] Tests E2E (Playwright)
  - [ ] Flujo de registro
  - [ ] Flujo de login
  - [ ] Flujo de compra de curso
  - [ ] Flujo de completar módulo
- [ ] Tests de componentes
- [ ] Tests de seguridad (RLS)
- [ ] Tests de rendimiento
- [ ] Lighthouse audit

### Archivos Nuevos
```
__tests__/
├── unit/
├── integration/
└── e2e/
```

### Resultado
- Cobertura de tests > 80%
- Cero bugs críticos
- Performance optimizado

---

## Fase 8: Optimización y Deployment
**Duración**: 1-2 semanas
**Dependencia**: Fase 7 (QA aprobado)

### Tareas
- [ ] Optimizar imágenes (Next Image)
- [ ] Code splitting
- [ ] Minificación
- [ ] Caching estratégico
- [ ] Lazy loading de componentes
- [ ] SEO optimization
- [ ] Sitemap.xml y robots.txt
- [ ] Deploy a Vercel/Netlify
- [ ] SSL/TLS setup
- [ ] CDN configuration
- [ ] Monitoring y alertas

### Resultado
- Performance Lighthouse > 90
- Deploy automático en cada push
- Monitoreo en producción

---

## Timeline Visual

```
Semana 1-2   [AUTH & BD]        █████████
Semana 3-4   [CURSOS]           █████████
Semana 5-6   [PAGOS]            █████████
Semana 7     [CERTIFICADOS]     █████
Semana 8     [NOTIFICACIONES]   █████
Semana 9     [ADMIN REPORTS]    █████
Semana 10-11 [TESTING]          ███████████
Semana 12-13 [OPTIMIZATION]     ███████████
             
Total: ~13 semanas hasta MVP listo para producción
```

---

## Presupuesto de Terceros (Estimado)

| Servicio | Costo | Uso |
|----------|-------|-----|
| Supabase | $5-50/mes | BD + Auth + Storage |
| Stripe | 2.9% + $0.30 | Procesamiento de pagos |
| SendGrid | Free - $20/mes | Emails transaccionales |
| Vercel | $0 - $20/mes | Hosting (escalable) |
| Domain | $12/año | hosting.com, namecheap |
| **Total** | **~$70-100/mes** | Para MVP |

---

## Métricas de Éxito

### Técnicas
- [ ] Build time < 60 segundos
- [ ] First Load JS < 100 kB
- [ ] Lighthouse score > 90
- [ ] Test coverage > 80%
- [ ] Zero console errors

### Negocio
- [ ] 100+ usuarios registrados en mes 1
- [ ] 50+ cursos completados en mes 1
- [ ] $500+ ingresos en mes 1
- [ ] NPS score > 40
- [ ] Tasa de retención > 60%

---

## Dependencias Externas (Actualizar)

```bash
npm update browserslist-db
npm audit fix
npm outdated
```

---

## Documentación a Crear Durante Desarrollo

- [ ] API Documentation (OpenAPI/Swagger)
- [ ] Database Schema Diagram
- [ ] User Flows Diagrams
- [ ] Component Library (Storybook)
- [ ] Deployment Guide
- [ ] Security Checklist
- [ ] Performance Optimization Guide
- [ ] Troubleshooting Guide

---

## Personas y Roles

### Admin AVAC
- Ver dashboard de usuarios
- Crear cursos y módulos
- Ver reportes de ingresos
- Gestionar certificaciones

### Estudiante
- Registrarse y login
- Comprar cursos
- Ver progreso
- Descargar certificados

### Visitante
- Ver landing page
- Ver noticias
- Ver información de servicios

---

## Riesgos y Mitigación

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|--------|-----------|
| Fuga de datos | Baja | Crítico | RLS + Encryption |
| Downtime BD | Baja | Alto | Backups automáticos |
| Chargeback de pagos | Media | Medio | Verificaciones Stripe |
| Bajo adoption | Media | Alto | MVP launch rápido |
| Scope creep | Alta | Medio | Sprints de 2 semanas |

---

## Contactos y Recursos

### Documentación
- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Stripe Docs](https://stripe.com/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)

### Comunidades
- [Next.js Discord](https://discord.gg/nextjs)
- [Supabase Discord](https://discord.supabase.com)
- [React Discord](https://discord.gg/react)

---

Última actualización: 2024-04-16
Status: Listo para comenzar Fase 1
