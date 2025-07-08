import { auth } from '@/auth'; // auth.js 인증 가져옴
import Link from 'next/link';

export default async function Home() {
    const session = await auth(); // 인증 정보에서 사용자 세션 구함
    return (
        <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            {session ? (
                <>
                    <p>당신은 {session.user?.name} 이름으로 로그인했음</p>
                    <Link href='/logout'>Sign out</Link>
                </>
            ) : (
                <>
                    <p>로그인하지 않았음</p>
                    <Link href='/login'>Sign in</Link>
                </>
            )}
        </div>
    );
}
