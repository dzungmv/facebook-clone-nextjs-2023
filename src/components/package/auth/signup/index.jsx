import Link from 'next/link';
import Tippy from '@tippyjs/react';

import LoginPage from '../login';

import styles from './signup.module.scss';

const SignUpPage = () => {
    return (
        <section className={styles.wrapperSignUp}>
            <section className='form-group'>
                <div className='form-control'>
                    <input type='text' placeholder='First name' />
                </div>
                <div className='form-control'>
                    <input type='text' placeholder='Last name' />
                </div>
            </section>

            <div className='form-control'>
                <input
                    type='text'
                    placeholder='Mobile number or email address'
                />
            </div>

            <div className='form-control'>
                <input type='text' placeholder='New password' />
            </div>

            <section className='form-label'>
                <label htmlFor=''>
                    Date of birth <span>?</span>
                </label>
                <section className='date-custom'>
                    <Tippy
                        content={''}
                        placement='bottom'
                        trigger='click'
                        interactive>
                        <section className='date-custom-item'>
                            <label className='label'>22</label>
                            <div className='arrow'>
                                <i className='fa-regular fa-chevron-down'></i>
                            </div>
                        </section>
                    </Tippy>

                    <section className='date-custom-item'>
                        <label className='label'>Jan</label>
                        <div className='arrow'>
                            <i className='fa-regular fa-chevron-down'></i>
                        </div>
                    </section>
                    <section className='date-custom-item'>
                        <label className='label'>2023</label>
                        <div className='arrow'>
                            <i className='fa-regular fa-chevron-down'></i>
                        </div>
                    </section>
                </section>
            </section>
            <p className='form-desc'>
                People who use our service may have uploaded your contact
                information to Facebook. <Link href={''}>Learn more.</Link>
            </p>

            <p className='form-desc'>
                By clicking Sign Up, you agree to our{' '}
                <Link href={''}>Terms</Link>,{' '}
                <Link href=''>Privacy Policy</Link> and{' '}
                <Link href=''>Cookies Policy</Link>. You may receive SMS
                notifications from us and can opt out at any time.
            </p>

            <div className='form-btn'>
                <button>Sign Up</button>
            </div>
        </section>
    );
};

export default SignUpPage;
