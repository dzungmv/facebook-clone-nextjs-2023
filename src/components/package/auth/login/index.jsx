'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Modal from '@/components/common/modal';
import SignUpPage from '../signup';
import styles from './login.module.scss';
import Image from 'next/image';

const LoginPage = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [addAccountModal, setAddAccountModal] = useState(false);
    const [signUpModal, setSignUpModal] = useState(false);

    return (
        <>
            <main className={styles.wrapperLoginPage}>
                <section className='login-container'>
                    <section className='login-left'>
                        <header>
                            <Image
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/facebook-logo-text.svg'
                                alt='Facebook'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </header>

                        <h4 className='login-left-title'>Recent logins</h4>
                        <p className='login-left-desc'>
                            Click your picture or add an account.
                        </p>
                        <section className='recent-section'>
                            <section
                                className='recent-item'
                                onClick={() => setAddAccountModal(true)}>
                                <div className='recent-item-img'>
                                    <div className='recent-add'>
                                        <i className='fa-solid fa-plus'></i>
                                    </div>
                                </div>

                                <div className='recent-item-footer'>
                                    Add Account
                                </div>
                            </section>
                        </section>
                    </section>
                    <section className='login-right'>
                        <section className='form'>
                            <div className='form-control'>
                                <input
                                    type='text'
                                    placeholder='Email address or phone number'
                                />
                            </div>

                            <section className='form-control form-control-pass'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Password'
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                {password && password.length > 0 && (
                                    <div
                                        className='form-control-pass-display'
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }>
                                        {showPassword ? (
                                            <i className='fa-regular fa-eye'></i>
                                        ) : (
                                            <i className='fa-regular fa-eye-slash'></i>
                                        )}
                                    </div>
                                )}
                            </section>

                            <div className='form-control form-control-btn'>
                                <button onClick={() => router.push('/')}>
                                    Log in
                                </button>
                            </div>

                            <div className='forgot-password'>
                                <Link href='/auth/identify'>
                                    Forgotten password?
                                </Link>
                            </div>

                            <hr />

                            <div className='new-account-btn'>
                                <button onClick={() => setSignUpModal(true)}>
                                    Create new account
                                </button>
                            </div>
                        </section>

                        <div className='create-page'>
                            <Link href='#'>Create a Page</Link> for a celebrity,
                            brand or business.
                        </div>
                    </section>
                </section>
            </main>

            {signUpModal && (
                <Modal
                    title={'Sign up'}
                    show={signUpModal}
                    size={'auto'}
                    close={() => {
                        setSignUpModal(false);
                    }}>
                    <SignUpPage />
                </Modal>
            )}

            {addAccountModal && (
                <Modal
                    title={'Log in to Facebook'}
                    show={addAccountModal}
                    close={() => setAddAccountModal(false)}
                    size={'auto'}>
                    <section className={styles.wrapperAddAccountModal}>
                        <section className='form'>
                            <div className='form-control'>
                                <input
                                    type='text'
                                    placeholder='Email address or phone number'
                                />
                            </div>

                            <div className='form-control form-control-pass'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Password'
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                {password && password.length > 0 && (
                                    <div
                                        className='form-control-pass-display'
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }>
                                        {showPassword ? (
                                            <i className='fa-regular fa-eye'></i>
                                        ) : (
                                            <i className='fa-regular fa-eye-slash'></i>
                                        )}
                                    </div>
                                )}
                            </div>

                            <section className='remember-pass'>
                                <input id='re-pass' type='checkbox' />
                                <label htmlFor='re-pass'>
                                    Remember password
                                </label>
                            </section>

                            <div className='form-control form-control-btn'>
                                <button onClick={() => router.push('/')}>
                                    Log in
                                </button>
                            </div>

                            <div className='forgot-password'>
                                <Link href='/auth/identify'>
                                    Forgotten password?
                                </Link>
                            </div>
                        </section>
                    </section>
                </Modal>
            )}
        </>
    );
};

export default LoginPage;
