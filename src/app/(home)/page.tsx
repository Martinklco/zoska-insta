// src/app/page.tsx

"use client"; // This is needed for client-side components like useSession

import Typography from '@mui/material/Typography';
import { useSession } from 'next-auth/react';
import AuthHomeView from '@/sections/AuthHomeView';
import NonAuthHomeView from '@/sections/NonAuthHomeView';

export default function Home() {
  const { data: session, status } = useSession(); // Get session data

  if (status === 'loading') {
    return <Typography>Načítava sa...</Typography>; // Show loading state while session is being fetched
  }

  return (
    <>
      {session ? (
        <AuthHomeView userName={session.user?.name || 'používateľ'} />
      ) : (
        <NonAuthHomeView />
      )}
    </>
  );
}
