import { AuthError, type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { ROUTES } from '@/app/constants/routes';

type User = {
  id: string;
  name: string;
};

const NINE_HOURS = 9 * 60 * 60 * 1000;

export const authConfig = {
  pages: {
    signIn: ROUTES.LOGIN,
  },
  callbacks: {
    async jwt({ token, user }) {
      const now = new Date().getTime();

      // Initial login hits this if-block.
      if (user && user.id && !token.authToken) {
        token.authToken = user.id;
        token.tokenExpiration = now + NINE_HOURS;
        return token;
      }

      // Hitting this if-block means we have an expired token, attempt to refresh it.
      if (
        typeof token.authToken === 'string' &&
        typeof token.tokenExpiration === 'number' &&
        now > token.tokenExpiration
      ) {
        try {
          const refreshTokenResponse = await fetch(`${process.env.API_URL}/auth/token`, {
            method: 'GET',
            headers: {
              'x-auth-token': token.authToken,
              'content-type': 'application/json',
            },
          });

          if (!refreshTokenResponse.headers.get('x-auth-token')) {
            throw new Error();
          }

          token.authToken = refreshTokenResponse.headers.get('x-auth-token');
          token.tokenExpiration = now + NINE_HOURS;
          return token;
        } catch {
          // Refresh failed, kill the token
          return null;
        }
      }
      return token;
    },
    session: async ({ session, token }) => {
      // If we want to make the apiToken available in components, then we have to explicitly forward it here.
      return { ...session, authToken: token.authToken };
    },
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const authIsRequired =
        nextUrl.pathname !== ROUTES.LOGIN && nextUrl.pathname !== ROUTES.REGISTER;
      if (authIsRequired && !isLoggedIn) {
        // return false;
        return Response.redirect(new URL(ROUTES.LOGIN, nextUrl));
      }

      if (!authIsRequired && isLoggedIn) {
        return Response.redirect(new URL(ROUTES.DASHBOARD, nextUrl));
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
            name: responseBody.user.displayName,
            id: authResponse.headers.get('x-auth-token') || '',
          } satisfies User;
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
} satisfies NextAuthConfig;
