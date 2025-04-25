import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    let lang = request.headers.get('Accept-Language').slice(0,2);
    
    if (lang !== 'pl') lang = 'en';
    
    console.log('middleware lang: ' + lang);
    
    return NextResponse.redirect(`${request.url}${lang}`);
}

export const config = {
    // matcher solution for public, api, assets and _next exclusion
    matcher: "/((?!api|static|.*\\..*|_next|pl|en).*)",
};
