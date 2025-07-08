import GitHub from 'next-auth/providers/github';
import type { NextAuthConfig } from 'next-auth';
import { PrismaClient } from '@prisma/client'; // 나중에 prisma 설치 할 예정
import { PrismaAdapter } from '@auth/prisma-adapter'; // 나중에 prisma 설치 할 예정

const prisma = new PrismaClient();

export default {
    adapter: PrismaAdapter(prisma),
    providers: [GitHub],
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60 * 24, // 5 = 5초, 60 * 60 * 24 = 1일, 30 * 24 * 60 * 60 = 30일
    },
    // sign in, sign out 페이지 API 경로 설정 (기존 api/auth/[...nextauth] 사용안함)
    pages: {
        signIn: '/login',
        signOut: '/logout',
    },
} satisfies NextAuthConfig;
