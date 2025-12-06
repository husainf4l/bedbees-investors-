'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PrivacyRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/privacy-policy');
  }, [router]);

  return null;
}
