"use client";
import { useRouter } from 'next/navigation';
import { useUser } from '@/app/provider';
import { useEffect } from 'react';
import WelcomeContainer from './_components/WelcomeContainer';

export default function Dashboard() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth'); // Redirect to login page
    }
  }, [user]);

  return (
    <div className="p-6">
      {user && <WelcomeContainer />}
    </div>
  );
}
