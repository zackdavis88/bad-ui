import { AuthError, type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

type User = {
  id: string;
  name: string;
};

export const authConfig = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user && user.id && !token.authToken) {
        token.authToken = user.id;
      }

      return token;
    },
    session: async ({ session, token }) => {
      // If we want to make the apiToken available in components, then we have to explicitly forward it here.
      return { ...session, authToken: token.authToken };
    },
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const authIsRequired = nextUrl.pathname !== '/' && nextUrl.pathname !== '/register';
      if (authIsRequired && !isLoggedIn) {
        return false;
      }

      let redirectUrl: URL;
      try {
        const searchParams = new URLSearchParams(nextUrl.search);
        const callbackUrl = new URL(searchParams.get('callbackUrl') || '');
        redirectUrl = new URL(callbackUrl.pathname, nextUrl);
      } catch {
        redirectUrl = new URL('/dashboard', nextUrl);
      }

      // Edge case where the redirectUrl is /logout. In that case, just take the user to /dashboard
      if (redirectUrl.pathname === '/logout') {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      if (!authIsRequired && isLoggedIn) {
        return Response.redirect(redirectUrl);
      }

      return true;
    },
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const { username, password } = credentials;
        if (typeof username !== 'string' || typeof password !== 'string') {
          throw new AuthError();
        }

        const authResponse = await fetch(`${process.env.API_URL}/auth`, {
          method: 'GET',
          headers: {
            'x-auth-basic': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
            'content-type': 'application/json',
          },
        });

        if (authResponse.ok) {
          const responseBody = await authResponse.json();
          return {
            name: responseBody.user.username,
            id: authResponse.headers.get('x-auth-token') || '',
          } satisfies User;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
