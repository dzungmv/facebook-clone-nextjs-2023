import Link from 'next/link';
import Tippy from '@tippyjs/react';

import LoginPage from '../login';

import styles from './signup.module.scss';

const SignUpPage = () => {
    return (
        <section className={styles.wrapperSignUp}>
            <div className='form-group'>
                <div className='form-control'>
                    <input type='text' placeholder='First name' />
                </div>
                <div className='form-control'>
                    <input type='text' placeholder='Last name' />
                </div>
            </div>

            <div className='form-control'>
                <input
                    type='text'
                    placeholder='Mobile number or email address'
                />
            </div>

            <div className='form-control'>
                <input type='text' placeholder='New password' />
            </div>

            <div className='form-label'>
                <label htmlFor=''>
                    Date of birth <span>?</span>
                </label>
                <div className='date-custom'>
                    <Tippy
                        content={''}
                        placement='bottom'
                        trigger='click'
                        interactive>
                        <div className='date-custom-item'>
                            <div className='label'>22</div>
                            <div className='arrow'>
                                <i className='fa-regular fa-chevron-down'></i>
                            </div>
                        </div>
                    </Tippy>

                    <div className='date-custom-item'>
                        <div className='label'>Jan</div>
                        <div className='arrow'>
                            <i className='fa-regular fa-chevron-down'></i>
                        </div>
                    </div>
                    <div className='date-custom-item'>
                        <div className='label'>2023</div>
                        <div className='arrow'>
                            <i className='fa-regular fa-chevron-down'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='form-desc'>
                People who use our service may have uploaded your contact
                information to Facebook. <Link href={''}>Learn more.</Link>
            </div>

            <div className='form-desc'>
                By clicking Sign Up, you agree to our{' '}
                <Link href={''}>Terms</Link>,{' '}
                <Link href=''>Privacy Policy</Link> and{' '}
                <Link href=''>Cookies Policy</Link>. You may receive SMS
                notifications from us and can opt out at any time.
            </div>

            <div className='form-btn'>
                <button>Sign Up</button>
            </div>
        </section>
    );
};

export default SignUpPage;
