import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Credenciales requeridas' }, { status: 400 });
    }

    if (action === 'login') {
      return NextResponse.json({
        success: true,
        data: { userId: 'usr_001', email, role: 'member' },
      });
    }

    if (action === 'register') {
      return NextResponse.json({
        success: true,
        data: { userId: `usr_${Date.now()}`, email, role: 'member' },
      }, { status: 201 });
    }

    return NextResponse.json({ error: 'Acción no válida' }, { status: 400 });
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
