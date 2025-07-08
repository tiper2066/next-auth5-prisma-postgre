'use client';
import { signOut } from 'next-auth/react'; // Auth.js 에서 제공하는 signOut 함수 (auth > index.js)

const LogOutPage = () => {
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            {/* 제공되는 signIn 함수를 이용, github 로그인으로 설정한 callbackUrl 라우팅을 적용함 */}
            <button onClick={() => signOut({ callbackUrl: '/' })}>
                Log Out
            </button>
        </div>
    );
};
export default LogOutPage;
