import { auth } from '@/auth'; // auth.js 인증 가져옴
import Link from 'next/link';
import { prisma } from '@/lib/prisma'; // *********************** prisma client 가져옴
import Image from 'next/image'; // *********************** next/image 가져오기

export default async function Home() {
    const session = await auth(); // 인증 정보에서 사용자 세션 구함

    // ************** DB 에서 모든 사용자 정보가져오기
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            image: true, // ******************** 타입 추가
        },
    });

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {session ? (
                <>
                    <p>당신은 {session.user?.name} 이름으로 로그인했음</p>
                    <Link href="/logout">Sign out</Link>
                </>
            ) : (
                <>
                    <p>로그인하지 않았음</p>
                    <Link href="/login">Sign in</Link>
                </>
            )}
            {/* ************************** 사용자 계정 아바타 및 정보 출력 */}
            <div className="mt-8 grid grid-cols-1 gap-6 w-full max-w-4xl">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="card card-side bg-base-100 shadow-xl p-4 flex items-center"
                    >
                        <Image
                            src={user.image || ''}
                            alt={user.name || ''}
                            width={100}
                            height={100}
                            className="rounded-full w-0 h-0"
                        />
                        <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>
                            <p>Email: {user.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
