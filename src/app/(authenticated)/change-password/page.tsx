import { Metadata } from 'next';
import { ChangePasswordContent } from '@/app/components/change-password-page';
export const metadata: Metadata = {
  title: 'Change Password',
};

export default async function ChangePasswordPage() {
  return <ChangePasswordContent />;
}
