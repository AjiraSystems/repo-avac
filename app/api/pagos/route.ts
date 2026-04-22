import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const payments = [
    { id: 'PAY-2024-001', description: 'Membresía Anual AVAC 2024', amount: 150.00, status: 'paid' },
    { id: 'PAY-2024-002', description: 'Inscripción: Seguridad Operacional OACI', amount: 85.00, status: 'paid' },
  ];

  return NextResponse.json({ data: payments });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { courseId, userId, amount } = body;

    if (!courseId || !userId || !amount) {
      return NextResponse.json({ error: 'Datos de pago incompletos' }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      data: { paymentId: `PAY-${Date.now()}`, status: 'pending', amount },
    }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
