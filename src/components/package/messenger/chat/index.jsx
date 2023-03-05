'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import styles from '../messenger.module.scss';

const Chat = ({ data }) => {
    const router = useRouter();
    if (data?.length) {
        <p>Loading...</p>;
    }

    if (!data) {
        router.push('/messenger');
    }
    return (
        <section className={styles.wrapperChat}>
            <section className='container__right--header'>
                <section className='user'>
                    <figure className='user__avatar'>
                        <Image
                            src={data.avatar}
                            alt='image'
                            width='0'
                            height='0'
                            sizes='100vw'
                            fill={false}
                        />
                    </figure>
                    <p className='user__name'>{data.name}</p>
                </section>
                <section className='action'>
                    <div className='action__icon'>
                        <i className='fa-solid fa-phone'></i>
                    </div>
                    <div className='action__icon'>
                        <i className='fa-solid fa-video'></i>
                    </div>
                    <div className='action__icon'>
                        <i className='fa-solid fa-circle-exclamation'></i>
                    </div>
                </section>
            </section>
            <section className='messenger__container'>
                <section className='messenger__container--heading'>
                    <figure className='avatar'>
                        <Image
                            src={data.avatar}
                            alt='image'
                            width='0'
                            height='0'
                            sizes='100vw'
                            fill={false}
                        />
                    </figure>
                    <div className='name'>{data.name}</div>
                    <p className='des'>You&apos;re friends on Facebook</p>
                </section>
            </section>
            <section className='container__right--footer'>
                <section className='footer-action'>
                    <div className='footer-action-item'>
                        <i className='fa-solid fa-circle-plus'></i>
                    </div>

                    <section className='footer-action-item upload__image'>
                        <input type='file' id='upload-file' hidden />
                        <label htmlFor='upload-file' className='icon'>
                            <i className='fa-sharp fa-solid fa-images'></i>
                        </label>
                    </section>
                </section>
                <div className='input__text'>
                    <input type='text' placeholder='Aa' />
                </div>
                <section className='like__section'>
                    <div className='icon'>
                        <i className='fa-solid fa-thumbs-up'></i>
                    </div>
                </section>
                <button hidden>Send</button>
            </section>
        </section>
    );
};

export default Chat;
