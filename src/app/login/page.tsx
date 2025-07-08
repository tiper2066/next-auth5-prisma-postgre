'use client';
import { signIn } from 'next-auth/react'; // Auth.js 에서 제공하는 signIn 함수 (auth > index.js)

const LoginPage = () => {
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <div className='card w-full max-w-md bg-base-100 shadow-xl'>
                <div className='card-body'>
                    <h2 className='card-title flex justify-center text-2xl font-bold'>
                        Welcome
                    </h2>
                    <p className='text-center text-gray-500'>
                        Sign in with one of the option below
                    </p>
                    <div className='mt-6 flex flex-col gap-4'>
                        {/* 제공되는 signIn 함수를 이용, github 로그인으로 설정한 callbackUrl 라우팅을 적용함 */}
                        <button
                            className='btn'
                            onClick={() =>
                                signIn('google', { callbackUrl: '/' })
                            }
                        >
                            Sign in with GitHub
                        </button>
                        {/* 제공되는 signIn 함수를 이용, github 로그인으로 설정한 callbackUrl 라우팅을 적용함 */}
                        <button
                            className='btn'
                            onClick={() =>
                                signIn('github', { callbackUrl: '/' })
                            }
                        >
                            Sign in with GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;
