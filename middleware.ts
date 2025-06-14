import { createServerClient } from '@supabase/ssr';
import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    let supabaseResponse = NextResponse.next({ request });

    const supabase = createServerClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON!, {
	    cookies: {
		getAll() {
		    return request.cookies.getAll()
		},
		setAll(cookiesToSet) {
		    cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
		    supabaseResponse = NextResponse.next({
			request
		    });
		    cookiesToSet.forEach(({ name, value, options }) =>
			supabaseResponse.cookies.set(name, value, options))
		}
	    }
	}
    );

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/login'
    ]
}
