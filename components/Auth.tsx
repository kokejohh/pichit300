'use client';

import { useEffect } from 'react';
import { supabase } from '@/app/lib/supabaseClient';
import { useDispatch } from 'react-redux';
import { login, logout } from '@/store/userSlice';

export default function Auth() {
    const dispatch = useDispatch();

    const getUser = async() => {
        const { data, error }  = await supabase.auth.getUser();

        dispatch(login(data.user));
    }

    useEffect(() => {
        getUser();
    }, []);

    return null;
}