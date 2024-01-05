import NextAuth from 'next-auth';
import { FirestoreAdapter } from '@auth/firebase-adapter';

export default NextAuth({
  adapter: FirestoreAdapter(),
});