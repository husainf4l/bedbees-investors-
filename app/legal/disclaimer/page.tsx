'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DisclaimerRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/legal-disclaimer');
  }, [router]);

  return null;
}
