# Próximos Pasos - Integración Supabase

## Fase 1: Base de Datos (Inmediato)

### 1.1 Crear Tablas en Supabase

#### Tabla: `users` (Perfiles de Miembros)
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  profession TEXT,
  profile_image_url TEXT,
  city TEXT,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);
```

#### Tabla: `courses` (Catálogo de Cursos)
```sql
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  duration_hours DECIMAL,
  total_modules INTEGER,
  price DECIMAL(10, 2),
  image_url TEXT,
  created_at TIMESTAMP DEFAULT now()
);
```

#### Tabla: `enrollments` (Inscripciones)
```sql
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  progress INTEGER DEFAULT 0,
  completed_modules INTEGER DEFAULT 0,
  completed_at TIMESTAMP,
  enrolled_at TIMESTAMP DEFAULT now(),
  UNIQUE(user_id, course_id)
);
```

#### Tabla: `modules` (Módulos de Cursos)
```sql
CREATE TABLE modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  duration_minutes INTEGER,
  order_index INTEGER,
  content TEXT,
  video_url TEXT,
  created_at TIMESTAMP DEFAULT now()
);
```

#### Tabla: `module_progress` (Progreso en Módulos)
```sql
CREATE TABLE module_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  enrollment_id UUID REFERENCES enrollments(id) ON DELETE CASCADE,
  module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP,
  quiz_score DECIMAL,
  UNIQUE(enrollment_id, module_id)
);
```

#### Tabla: `payments` (Historial de Pagos)
```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  enrollment_id UUID REFERENCES enrollments(id) ON DELETE SET NULL,
  amount DECIMAL(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending', -- 'pending', 'completed', 'failed'
  stripe_payment_id TEXT,
  description TEXT,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);
```

#### Tabla: `certificates` (Certificados)
```sql
CREATE TABLE certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  enrollment_id UUID REFERENCES enrollments(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id),
  certificate_number TEXT UNIQUE,
  issued_at TIMESTAMP DEFAULT now(),
  expires_at TIMESTAMP,
  pdf_url TEXT
);
```

---

## Fase 2: Autenticación (Día 2-3)

### 2.1 Configurar Supabase Auth

1. **En el dashboard de Supabase:**
   - Ir a Authentication > Providers
   - Habilitar "Email"
   - Desabilitar email confirmation (si aplica para desarrollo rápido)

2. **Variables de entorno:**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
   ```

### 2.2 Crear Cliente Supabase

**Archivo: `lib/supabase.ts`**
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

### 2.3 Implementar Auth en FormulariosOS

**Actualizar: `components/forms/LoginForm.tsx`**
```typescript
import { supabase } from '@/lib/supabase';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  const { data, error } = await supabase.auth.signInWithPassword({
    email: form.email,
    password: form.password,
  });

  if (error) {
    // Mostrar error con toast
    return;
  }

  // Redirigir a dashboard
};
```

**Actualizar: `components/forms/RegisterForm.tsx`**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  const { data, error } = await supabase.auth.signUp({
    email: form.email,
    password: form.password,
  });

  if (error) {
    // Mostrar error
    return;
  }

  // Crear perfil en tabla users
  const { error: profileError } = await supabase
    .from('users')
    .insert({
      id: data.user?.id,
      email: form.email,
      first_name: form.firstName,
      last_name: form.lastName,
      profession: form.profession,
    });

  if (!profileError) {
    // Redirigir a login
  }
};
```

---

## Fase 3: Middleware de Protección (Día 4)

### 3.1 Crear Middleware

**Archivo: `middleware.ts` (en raíz)**
```typescript
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res });

  const { data: { session } } = await supabase.auth.getSession();

  // Proteger rutas /dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Redirigir login/registro si ya está autenticado
  if (['/login', '/registro'].includes(request.nextUrl.pathname)) {
    if (session) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return res;
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/registro'],
};
```

### 3.2 Crear Context de Autenticación

**Archivo: `providers/AuthProvider.tsx`**
```typescript
'use client';

import { createContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export const AuthContext = createContext();

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
```

---

## Fase 4: Llenar Datos (Día 5)

### 4.1 Seed de Cursos

```typescript
// scripts/seed-courses.ts
const courses = [
  {
    title: 'Seguridad Operacional OACI',
    description: 'Estándares internacionales de seguridad operacional',
    category: 'Seguridad',
    duration_hours: 9,
    total_modules: 8,
    price: 85.00,
  },
  // ... más cursos
];

// Insertar en Supabase
for (const course of courses) {
  await supabase.from('courses').insert(course);
}
```

### 4.2 Crear Módulos

```typescript
// Asociar módulos a cada curso
const modules = [
  { course_id, title: 'Introducción...', duration_minutes: 45, order_index: 1 },
  // ... más módulos
];
```

---

## Fase 5: Row Level Security (Día 5-6)

### 5.1 Habilitar RLS en todas las tablas

```sql
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
```

### 5.2 Crear Políticas

**Para tabla `users`:**
```sql
CREATE POLICY "Users can view own profile"
  ON users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);
```

**Para tabla `enrollments`:**
```sql
CREATE POLICY "Users can view own enrollments"
  ON enrollments FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can enroll in courses"
  ON enrollments FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());
```

**Para tabla `payments`:**
```sql
CREATE POLICY "Users can view own payments"
  ON payments FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());
```

---

## Fase 6: Integración Stripe (Día 7-8)

### 6.1 Instalar Stripe

```bash
npm install stripe @stripe/stripe-js
```

### 6.2 Crear Edge Function para Pagos

**Archivo: `supabase/functions/create-payment-intent/index.ts`**
```typescript
import Stripe from "stripe";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY"));

Deno.serve(async (req) => {
  const { courseId, amount } = await req.json();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100),
    currency: "usd",
    metadata: { courseId },
  });

  return new Response(
    JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    { headers: { "Content-Type": "application/json" } }
  );
});
```

### 6.3 Webhook para Confirmaciones

```typescript
// Crear endpoint para webhook de Stripe
// Actualizar estado de pago en DB cuando se confirme
```

---

## Checklist de Implementación

### Semana 1
- [ ] Crear todas las tablas en Supabase
- [ ] Habilitar RLS en todas las tablas
- [ ] Crear políticas de seguridad
- [ ] Actualizar LoginForm con Supabase Auth
- [ ] Actualizar RegisterForm con Supabase Auth
- [ ] Crear cliente Supabase (`lib/supabase.ts`)

### Semana 2
- [ ] Implementar Middleware de protección
- [ ] Crear Context de Autenticación
- [ ] Wrappear app con AuthProvider
- [ ] Seed de cursos y módulos
- [ ] Actualizar páginas para fetchear datos reales
- [ ] Implementar logout real

### Semana 3
- [ ] Integrar Stripe
- [ ] Crear Edge Function de pagos
- [ ] Implementar webhook de confirmación
- [ ] Actualizar tabla payments con pagos reales
- [ ] Testing de flujo completo

### Semana 4
- [ ] Implementar generación de certificados
- [ ] Video streaming para contenido de cursos
- [ ] Quiz y evaluaciones
- [ ] Notificaciones por email
- [ ] Deployment a producción

---

## Variables de Entorno Finales

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Email Service
SENDGRID_API_KEY=
SENDGRID_FROM_EMAIL=

# Environment
NEXT_PUBLIC_APP_ENV=production
```

---

## Línea de Tiempo Recomendada

**Semana 1**: Supabase + Auth básica
**Semana 2**: Rutas protegidas + datos reales
**Semana 3**: Pagos con Stripe
**Semana 4**: Certificados + emails
**Semana 5**: Testing + optimización
**Semana 6**: Deployment

**Total: 6 semanas** hasta MVP completo listo para producción.

---

Última actualización: 2024-04-16
