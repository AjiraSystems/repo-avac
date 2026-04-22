# Mapa de Rutas - AVAC

## Rutas Públicas (sin autenticación)

### Landing & Información
| Ruta | Descripción | Componentes |
|------|-------------|------------|
| `/` | Home con Hero, About, Services, News, Newsletter | Hero, About, Services, News, Newsletter |
| `/nosotros` | Página completa sobre AVAC - Historia, equipo, hitos | Custom page (timeline) |
| `/noticias` | Listado de últimas noticias con filtros | News cards, pagination |
| `/servicios` | Detalle de cada servicio ofrecido | Service cards, CTA |

### Layout Público
```
Navbar (Logo, Menu, CTA de Login)
└── Página (Hero, Sections, etc)
└── Footer (Links, Copyright, Newsletter)
```

---

## Rutas de Autenticación

| Ruta | Descripción | Componentes |
|------|-------------|------------|
| `/login` | Iniciar sesión con email y contraseña | LoginForm |
| `/registro` | Crear nueva cuenta | RegisterForm |

### Layout de Auth
```
Logo AVAC (small)
└── Formulario centrado (max-width: 420px)
└── Footer minimalista
```

**Características de formularios:**
- Validación en tiempo real
- Toggle de visibilidad de contraseña
- Links de ayuda (¿Olvidaste tu contraseña?)
- Indicadores de carga (spinners)
- Redirecciones entre login/registro

---

## Rutas Protegidas (Dashboard - requiere autenticación)

### Dashboard Principal
| Ruta | Descripción | Componentes |
|------|-------------|------------|
| `/dashboard` | Panel principal con KPIs | 4 stats, cursos en progreso, actividad |
| `/dashboard/cursos` | Mis cursos (activos, completados, bloqueados) | Course cards con filtros |
| `/dashboard/cursos/[id]` | Detalle de curso con módulos | Module list, progress bar |
| `/dashboard/pagos` | Historial y gestión de pagos | Payment list, alertas |
| `/dashboard/perfil` | Información personal y certificaciones | Profile form, certs list |

### Layout del Dashboard
```
DashboardSidebar (colapsable)
├── Logo AVAC
├── Nav Items (Dashboard, Cursos, Pagos, Perfil)
└── Logout

DashboardHeader
├── Título + Subtítulo
├── Search (hidden en mobile)
├── Notifications
└── Avatar + User Info

Main Content (flex-1)
```

---

## API Endpoints

### Autenticación
```
POST /api/auth
{
  "action": "login" | "register",
  "email": "user@example.com",
  "password": "password123"
}
Response: { success: true, data: { userId, email, role } }
```

### Contacto
```
POST /api/contacto
{
  "name": "string",
  "email": "string",
  "message": "string"
}
Response: { success: true, message: "..." }
```

### Cursos
```
GET /api/cursos
Response: { data: Course[] }

POST /api/cursos
{
  "title": "string",
  "description": "string",
  "duration": "number"
}
Response: { success: true, data: Course }
```

### Pagos
```
GET /api/pagos
Response: { data: Payment[] }

POST /api/pagos
{
  "courseId": "string",
  "userId": "string",
  "amount": "number"
}
Response: { success: true, data: { paymentId, status, amount } }
```

---

## Flujo de Navegación del Usuario

### Visitante Anónimo
```
Home (/)
  ↓ Lee contenido
  ↓ Clica "Inscribirse" o "Login"
    ├→ /login (tiene cuenta)
    └→ /registro (nuevo usuario)
```

### Miembro Registrado
```
/login
  ↓ Autentica
  ↓ Redirige a /dashboard

Dashboard (/dashboard)
  ├→ Ver/completar cursos (/dashboard/cursos/[id])
  ├→ Revisar pagos (/dashboard/pagos)
  ├→ Editar perfil (/dashboard/perfil)
  └→ Salir (logout)
```

---

## Estados Visuales por Ruta

### Home (/)
- Hero con fondo de imagen
- Gradient overlays
- Botones CTA primarios

### Páginas Públicas (/nosotros, /noticias, /servicios)
- Same Navbar + Footer
- Hero banner personalizado
- Content sections

### Autenticación (/login, /registro)
- Fondo degradado (blue/slate)
- Formularios centrados
- Validación con estados visuales

### Dashboard (/dashboard/*)
- Sidebar oscuro (slate-900)
- Header blanco con sombra
- Cards con hover effects
- Progress bars animadas
- Estado indicators (badges)

---

## Parámetros Dinámicos

### Rutas con Parámetros
```
/dashboard/cursos/[id]
  - id: courseId (número o UUID)
  - Ejemplo: /dashboard/cursos/1
  - Ejemplo: /dashboard/cursos/abc-123-def
```

---

## Nombres de Funciones por Ruta

### Componentes por Página
```
(public)/page.tsx          → Home component
(public)/nosotros/page.tsx → NosotrosPage
(public)/noticias/page.tsx → NoticiasPage
(public)/servicios/page.tsx → ServiciosPage

(auth)/login/page.tsx      → LoginPage
(auth)/registro/page.tsx   → RegisterPage

(dashboard)/dashboard/page.tsx              → DashboardPage
(dashboard)/dashboard/cursos/page.tsx       → CursosPage
(dashboard)/dashboard/cursos/[id]/page.tsx  → CursoDetailPage
(dashboard)/dashboard/pagos/page.tsx        → PagosPage
(dashboard)/dashboard/perfil/page.tsx       → PerfilPage
```

---

## Redirecciones Recomendadas

| De | Hacia | Condición |
|----|-------|-----------|
| `/` | `/dashboard` | Si está autenticado |
| `/login` | `/dashboard` | Si ya está autenticado |
| `/registro` | `/dashboard` | Si ya está autenticado |
| `/dashboard/*` | `/login` | Si NO está autenticado |

---

## Variables de Entorno Necesarias

```env
# Supabase (agregar cuando se integre)
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key

# Stripe (agregar cuando se integre)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key
STRIPE_SECRET_KEY=your_secret

# Email Service (agregar cuando se implemente)
EMAIL_SERVICE_API_KEY=your_key
```

---

## Validaciones de Formulario

### LoginForm
- Email: requerido, formato válido
- Contraseña: requerido, mín 8 caracteres

### RegisterForm
- Nombre: requerido
- Apellido: requerido
- Email: requerido, formato válido
- Profesión: opcional
- Contraseña: requerido, mín 8 caracteres
- Confirmar: debe coincidir con contraseña

---

## Estados de Carga

Todos los formularios muestran spinner durante envío:
- Estado: `isLoading`
- Icono: `<Loader2 className="animate-spin" />`
- Texto dinámico: "Iniciando sesión...", "Creando cuenta..."

---

Última actualización: 2024-04-16
