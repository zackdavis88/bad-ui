export const ROUTES = {
  LOGIN: '/',
  LOGOUT: '/logout',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  CHANGE_PASSWORD: '/change-password',
} as const satisfies Record<string, string>;
