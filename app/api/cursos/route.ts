import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const courses = [
    { id: 1, title: 'Seguridad Operacional OACI', category: 'Seguridad', duration: '9h', modules: 8 },
    { id: 2, title: 'Regulaciones Aeronáuticas Venezolanas', category: 'Normativa', duration: '7h', modules: 10 },
    { id: 3, title: 'Meteorología para Pilotos Avanzado', category: 'Técnico', duration: '10h', modules: 12 },
  ];

  return NextResponse.json({ data: courses });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json({ success: true, data: { id: Date.now(), ...body } }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
