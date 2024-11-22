'use client';
import Header from "@/components/header";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation';

export default function Home() {

  // const { data: session, status } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const router = useRouter();

  useEffect(() => {
    // if (status === 'authenticated') {
    //   router.push('/dashboard');
    // } else if (status === 'unauthenticated') {
    //   router.push('/login');
    // }
    if(!isAuthenticated) {
      // router.push('/login');
      redirect('/login')
    } else if (isAuthenticated) {
      // router.push('/dashboard');
      redirect('/dashboard');
    }
  }, []);

  // if (status === 'loading') return <div>Loading...</div>; // Loading state

  return null;
}
