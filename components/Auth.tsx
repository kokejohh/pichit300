'use client';

import { useEffect } from 'react';
import { createClient } from '@/app/utils/supabase/supabaseClient';
import { useDispatch } from 'react-redux';
import { login } from '@/store/userSlice';

export default function Auth() {
    const supabase = createClient();
    const dispatch = useDispatch();

    const getUser = async () => {
        const { data, error } = await supabase.auth.getUser();

        dispatch(login(data.user));

        if (data.user) {

            const { data: existing, error: checkError } = await supabase.from('profiles').select('*').eq('user_id', data.user?.id).single();

            if (!existing) {
                const { error: insertError } = await supabase.from('profiles').insert([{ user_id: data.user?.id, display_name: data.user.user_metadata.name, picture: data.user.user_metadata.picture }]);

                if (insertError) console.error('Error creating profile', insertError);
            }
        }
        const { data: d, error: e } = await supabase.auth.getSession();
        console.log('koke', data);
    }

    useEffect(() => {
        getUser();
    }, []);

    return null;
}