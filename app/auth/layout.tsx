import { ReactNode } from 'react';
import AuthLayout from '@/app/layouts/auth'; // adjust path as needed

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
}
