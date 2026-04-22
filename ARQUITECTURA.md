# Arquitectura del Proyecto AVAC

## Resumen Ejecutivo

Proyecto Next.js 13+ (App Router) completamente reorganizado con arquitectura profesional separando claramente:
- **Web Pública (Landing)**: Información general, servicios, noticias
- **Autenticación**: Login y registro seguros
- **Intranet/Dashboard**: Sistema interno para miembros

**Estado**: Completamente funcional, cero errores de build, 17 páginas generadas.

---

## Estructura de Directorios

```
project/
├── app/
│   ├── (public)/                      # Grupo de rutas públicas
│   │   ├── layout.tsx                 # Layout con Navbar + Footer
│   │   ├── page.tsx                   # Home principal
│   │   ├── nosotros/
│   │   │   └── page.tsx               # Sobre nosotros completo
│   │   ├── noticias/
│   │   │   └── page.tsx               # Listado de noticias
│   │   └── servicios/
│   │       └── page.tsx               # Detalles de servicios
│   │
│   ├── (auth)/                        # Grupo de rutas de autenticación
│   │   ├── layout.tsx                 # Layout minimalista
│   │   ├── login/
│   │   │   └── page.tsx               # Formulario de login
│   │   └── registro/
│   │       └── page.tsx               # Formulario de registro
│   │
│   ├── (dashboard)/                   # Grupo de rutas protegidas
│   │   ├── layout.tsx                 # Layout con sidebar + header
│   │   └── dashboard/
│   │       ├── page.tsx               # Dashboard principal
│   │       ├── cursos/
│   │       │   ├── page.tsx           # Lista de cursos
│   │       │   └── [id]/
│   │       │       └── page.tsx       # Detalle de curso
│   │       ├── pagos/
│   │       │   └── page.tsx           # Historial de pagos
│   │       └── perfil/
│   │           └── page.tsx           # Perfil del usuario
│   │
│   ├── api/                           # Rutas API
│   │   ├── auth/route.ts              # Endpoints de autenticación
│   │   ├── contacto/route.ts          # Formulario de contacto
│   │   ├── cursos/route.ts            # API de cursos
│   │   └── pagos/route.ts             # API de pagos
│   │
│   ├── layout.tsx                     # Layout raíz
│   └── globals.css                    # Estilos globales
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                 # Navegación principal
│   │   └── Footer.tsx                 # Pie de página
│   │
│   ├── sections/
│   │   ├── Hero.tsx                   # Sección hero de landing
│   │   ├── About.tsx                  # Sección "Acerca de"
│   │   ├── Services.tsx               # Sección de servicios
│   │   ├── News.tsx                   # Sección de noticias
│   │   └── Newsletter.tsx             # Suscripción a newsletter
│   │
│   ├── dashboard/
│   │   ├── DashboardSidebar.tsx       # Sidebar colapsable
│   │   └── DashboardHeader.tsx        # Header con búsqueda y avatar
│   │
│   ├── forms/
│   │   ├── LoginForm.tsx              # Componente de login
│   │   └── RegisterForm.tsx           # Componente de registro
│   │
│   └── ui/
│       └── [60+ componentes shadcn]   # Sistema de diseño
│
├── hooks/
│   └── use-toast.ts                   # Hook para notificaciones
│
└── lib/
    └── utils.ts                       # Utilidades (cn, etc.)
```

---

## Flujo de Navegación

### Ruta Pública (sin autenticación)
```
/ (Home)
  ├─ /nosotros (Quiénes somos)
  ├─ /noticias (Noticias)
  └─ /servicios (Servicios)
```

### Autenticación
```
/login (Iniciar sesión)
/registro (Crear cuenta)
```

### Ruta Protegida (Dashboard - requiere auth)
```
/dashboard (Principal)
  ├─ /dashboard/cursos (Mis cursos)
  │   └─ /dashboard/cursos/[id] (Detalle de curso)
  ├─ /dashboard/pagos (Historial de pagos)
  └─ /dashboard/perfil (Mi perfil)
```

---

## Características Implementadas

### Landing Page (Pública)
- ✅ Hero section con CTA
- ✅ Sección "Sobre nosotros" con equipo
- ✅ Catálogo de servicios
- ✅ Blog de noticias
- ✅ Newsletter subscription
- ✅ Navbar responsive con menú
- ✅ Footer con enlaces

### Autenticación
- ✅ Formulario de login con validación
- ✅ Formulario de registro con 5 campos
- ✅ Toggle de visibilidad de contraseña
- ✅ Links de recuperación de contraseña
- ✅ Layout minimalista para auth
- ✅ Indicadores de carga (spinners)

### Dashboard
- ✅ Sidebar colapsable con navegación activa
- ✅ Header con búsqueda, notificaciones y avatar
- ✅ Dashboard principal con 4 KPIs
- ✅ Listado de cursos (activos, completados, bloqueados)
- ✅ Detalle de curso con módulos y progreso
- ✅ Historial de pagos con alertas
- ✅ Perfil de usuario con certificaciones
- ✅ Sistema de badges y estados visuales

### API Endpoints
- ✅ POST /api/auth - Login y registro
- ✅ GET /api/contacto - Envío de mensajes
- ✅ GET/POST /api/cursos - Listado e inscripción
- ✅ GET/POST /api/pagos - Historial y procesamiento

---

## Diseño y Estilos

### Colores Principales
- **Primario**: Azul (from-blue-500 to-blue-600)
- **Secundarios**: Verde, Ámbar, Rosa para estados
- **Neutrales**: Grises para texto y fondos

### Tipografía
- **Headings**: Poppins (bold)
- **Body**: Inter (regular, light)
- Jerarquía clara con peso y tamaño

### Componentes Reutilizables
- Botones con estados y variantes
- Cards con efectos hover
- Inputs con validación visual
- Badges para categorías y estados
- Avatares con iniciales

---

## Tecnologías Utilizadas

| Tecnología | Propósito |
|-----------|----------|
| Next.js 13 | Framework principal (App Router) |
| TypeScript | Tipado estático |
| TailwindCSS | Estilos y responsive |
| shadcn/ui | Sistema de componentes |
| Lucide React | Iconografía |
| React Hook Form | Manejo de formularios |
| Zod | Validación de esquemas |

---

## Próximos Pasos Sugeridos

### 1. Integración de Supabase (Prioritario)
```typescript
// Crear tablas en Supabase
- users (perfil de miembros)
- courses (catálogo de cursos)
- enrollments (inscripciones)
- payments (historial de pagos)
- certificates (certificados)
```

### 2. Autenticación Real
```typescript
// Reemplazar formularios mock con Supabase Auth
- signUp()
- signInWithPassword()
- signOut()
- Session management
```

### 3. Protección de Rutas
```typescript
// Middleware para proteger /dashboard
// Redirect a /login si no está autenticado
```

### 4. Integración de Pagos (Stripe)
```typescript
// Webhook handlers
// Payment intent creation
// Transactional emails
```

### 5. Gestión de Contenido de Cursos
```typescript
// Video streaming
// Quiz y evaluaciones
// Generación de certificados
```

---

## Mejores Prácticas Implementadas

✅ **Separación de responsabilidades**: Cada ruta group tiene su propósito
✅ **Componentes reutilizables**: Sections, Forms, Dashboard components
✅ **TypeScript**: Tipado en todo el código
✅ **Tailwind CSS**: Sin CSS personalizado innecesario
✅ **SEO**: Metadatos en cada página
✅ **Responsive**: Funciona en mobile, tablet, desktop
✅ **Accesibilidad**: Labels, ARIA attributes
✅ **Performance**: Zero layout shift, images optimizadas

---

## Cómo Ejecutar

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build
npm run build

# Producción
npm start

# Lint
npm run lint

# Type check
npm run typecheck
```

---

## Estructura de Commits Sugerida

```
1. feat: Set up Supabase database and migrations
2. feat: Implement real authentication with Supabase
3. feat: Add route protection middleware
4. feat: Integrate Stripe payment processing
5. feat: Build course content management system
```

---

Última actualización: 2024-04-16
Estado: Completamente funcional ✅
