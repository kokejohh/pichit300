import { NextRequest, NextResponse } from "next/server";
import { env } from "process";

export async function POST(req: NextRequest) {
    const url = 'https://restapi.tu.ac.th/api/v1/auth/Ad/verify';
    const {UserName, PassWord} = await req.json();

    const result = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': env.API_TU ?? ''
        },
        body: JSON.stringify({UserName, PassWord})
    });

    const response = NextResponse.json(await result.json());

    return response;
}