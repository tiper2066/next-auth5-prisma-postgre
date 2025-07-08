import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
    // 사용자가 유효한 세션 토큰을 가지고 있는지 여부 체크
    const token = await getToken({
        req: request,
        secret: process.env.AUTH_SECRET,
    });
    // 만일 유효한 세션 토큰을 가자고 있지 않다면...
    if (!token) {
        // 로그인 페이지로 리다이렉트 함
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // 사용자가 로그인되어 있다면 (세션토큰이 유효하다면) 응답을 계속 진행함
    return NextResponse.next();
}
// admin 경로와 그 하위 경로를 보호 경로로 설정한다.
export const config = {
    matcher: ['/admin/:path*'],
};
