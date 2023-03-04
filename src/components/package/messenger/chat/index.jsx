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
        <div className={styles.wrapperChat}>
            <div className='container__right--header'>
                <div className='user'>
                    <div className='user__avatar'>
                        <Image
                            src={data.avatar}
                            alt='image'
                            width='0'
                            height='0'
                            sizes='100vw'
                            fill={false}
                        />
                    </div>
                    <div className='user__name'>{data.name}</div>
                </div>
                <div className='action'>
                    <div className='action__icon'>
                        <i className='fa-solid fa-phone'></i>
                    </div>
                    <div className='action__icon'>
                        <i className='fa-solid fa-video'></i>
                    </div>
                    <div className='action__icon'>
                        <i className='fa-solid fa-circle-exclamation'></i>
                    </div>
                </div>
            </div>
            <div className='messenger__container'>
                <div className='messenger__container--heading'>
                    <div className='avatar'>
                        <Image
                            src={data.avatar}
                            alt='image'
                            width='0'
                            height='0'
                            sizes='100vw'
                            fill={false}
                        />
                    </div>
                    <div className='name'>{data.name}</div>
                    <div className='des'>You're friends on Facebook</div>
                </div>
            </div>
            <div className='container__right--footer'>
                <div className='footer-action'>
                    <div className='footer-action-item'>
                        <i className='fa-solid fa-circle-plus'></i>
                    </div>

                    <div className='footer-action-item upload__image'>
                        <input type='file' id='upload-file' hidden />
                        <label htmlFor='upload-file' className='icon'>
                            <i className='fa-sharp fa-solid fa-images'></i>
                        </label>
                    </div>
                </div>
                <div className='input__text'>
                    <input type='text' placeholder='Aa' />
                </div>
                <div className='like__section'>
                    <div className='icon'>
                        <i className='fa-solid fa-thumbs-up'></i>
                    </div>
                </div>
                <button hidden>Send</button>
            </div>
        </div>
    );
};

export default Chat;
