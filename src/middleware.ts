import NextAuth from 'next-auth';
import { authConfig } from '@/app/data/auth/auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|favicon.ico|_next/static|_next/image|.*\\.png$).*)'],
};
