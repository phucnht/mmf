import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { selectAuthData } from 'store/account/auth/auth.slice';
import { useAppSelector } from 'store/store.hook';

export default function useAuthGuard() {
  const router = useRouter();
  const { accessToken } = useAppSelector(selectAuthData);

  useEffect(() => {
    if (!accessToken) {
      router.push('/');
    }
  }, [accessToken, router]);
}
