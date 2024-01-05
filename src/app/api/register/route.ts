import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

import prisma from '@prisma';
import connectDB from '@/utils/connectDB';

export const POST = async (req: Request) => {
  try {
    const { name, email, password } = await req.json();
    if(!name || !email || !password)
      return NextResponse.json({
        error: 'Please provide all required fields',
      }, { status: 422 });
    
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectDB();
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: 'Something went wrong',
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const GET = async () => {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
};