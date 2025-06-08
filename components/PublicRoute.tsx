'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function PublicRoute({ children }: Readonly<{ children: React.ReactNode }>) {
    const user = useSelector<RootState, any>(state => state.user.user);
    const router = useRouter();

    // useEffect(() => {
    //     router.push('/tasks');
    // }, []);

    return <>{ children }</>;
};

