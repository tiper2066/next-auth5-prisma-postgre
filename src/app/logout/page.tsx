'use client';
import { signOut } from 'next-auth/react'; // Auth.js 에서 제공하는 signOut 함수 (auth > index.js)
import Link from 'next/link';

const LogOutPage = () => {
    return (
        <main className="flex h-screen items-center justify-center">
            <div className="card w-full max-w-md shadow-lg rounded-lg">
                <div className="card-body p-6 bg-base-100">
                    <h2 className="text-2xl font-bold mb-4">Log Out</h2>
                    <p>Are you sure you want to log out?</p>

                    <div className="card-actions flex justify-end space-x-4">
                        <Link href="/" className="btn btn-outline btn-primary">
                            Cancel
                        </Link>
                        {/* 제공되는 signIn 함수를 이용, github 로그인으로 설정한 callbackUrl 라우팅을 적용함 */}
                        <button
                            className="btn btn-secondary"
                            onClick={() => signOut({ callbackUrl: '/' })}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default LogOutPage;
