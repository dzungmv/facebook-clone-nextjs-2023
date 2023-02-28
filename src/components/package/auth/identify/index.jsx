'use client';

import Image from 'next/image';
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/navigation';
import styles from './identify.module.scss';

const ForgotPassPage = () => {
    const router = useRouter();
    return (
        <section className={styles.wrapperForgotPass}>
            <header className='header'>
                <div className='header-left'>
                    <Image
                        src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/facebook-logo-text.svg'
                        alt='Facebook'
                        width='0'
                        height='0'
                        fill={false}
                        sizes='100vw'
                    />
                </div>
                <div className='header-right'>
                    <div className='form-control'>
                        <input type='text' placeholder='Email or phone' />
                    </div>
                    <div className='form-control'>
                        <input type='password' placeholder='Password' />
                    </div>

                    <div className='form-btn'>
                        <button onClick={() => router.push('/')}>Login</button>
                    </div>
                </div>
            </header>
            <main className='body'>
                <header>Find Your Account</header>
                <hr />

                <div className='content'>
                    <div className='content-desc'>
                        Please enter your email address or mobile number to
                        search for your account.
                    </div>

                    <div className='form-control'>
                        <input
                            type='text'
                            placeholder='Email address or mobile number'
                        />
                    </div>
                </div>

                <hr />

                <footer>
                    <div className='form-btn'>
                        <button onClick={() => router.push('/auth/login')}>
                            Cancel
                        </button>
                        <button onClick={() => router.push('/login')}>
                            Search
                        </button>
                    </div>
                </footer>
            </main>
        </section>
    );
};

export default ForgotPassPage;
