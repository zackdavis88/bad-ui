import { Metadata } from 'next';
import { LogoutPageContent } from '@/app/components/logout-page';

export const metadata: Metadata = {
  title: 'Logout',
};

export default function LogoutPage() {
  return <LogoutPageContent />;
}
