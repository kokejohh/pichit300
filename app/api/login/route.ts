import { NextRequest, NextResponse } from "next/server";
import { env } from "process";
// import { supabase } from "@/app/lib/supabase";

export async function POST(req: NextRequest) {
    const url = 'https://restapi.tu.ac.th/api/v1/auth/Ad/verify';
    /*
    const {UserName, PassWord} = await req.json();

    const result = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': env.API_TU ?? ''
        },
        body: JSON.stringify({UserName, PassWord})
    });

    const dataTU = await result.json();
    const { data, error } = await supabase.auth.signUp({
        email: dataTU.email,
        password: PassWord,
        options: {
            data: {
                displayName: dataTU.displayname_en
            }
        }
    });

    const response = NextResponse.json({data, error});
    */
   const response = NextResponse.json({});

    return response;
}