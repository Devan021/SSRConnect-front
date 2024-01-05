import prisma from '@prisma';

const connectDB = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error(error);
    throw new Error('Unable to connect to database');
  }
};

export default connectDB;