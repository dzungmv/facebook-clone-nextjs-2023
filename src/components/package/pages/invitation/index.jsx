import Image from 'next/image';
import styles from '../pages.module.scss';

import data from '@/components/data/data';

const Invitation = () => {
    return (
        <section className={styles.wrapperInvitation}>
            <header className='header'>
                <h3 className='header-title'>Invitations</h3>
                <p className='header-sub__title'>
                    Page and profile invitations
                </p>
            </header>

            <section className='content'>
                <section className='content-item box'>
                    <section className='content-item-header'>
                        <figure className='content-item-header-avatar'>
                            <Image
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/pages/page3/avatar.jpg'
                                alt='text'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </figure>

                        <section className='content-item-header-right'>
                            <h3 className='content-item-header-right-name'>
                                Chị là lý do em say chị.
                            </h3>
                            <p className='content-item-header-right-cata'>
                                Creater
                            </p>
                            <section className='content-item-header-inviter'>
                                <figure className='content-item-header-inviter-avatar'>
                                    {' '}
                                    <Image
                                        src={data.users[1].avatar}
                                        alt='text'
                                        width='0'
                                        height='0'
                                        fill={false}
                                        sizes='100vw'
                                    />
                                </figure>
                                <div className='content-item-header-inviter-name'>
                                    {data.users[1].name}{' '}
                                    <span>invited you to like this Page.</span>
                                </div>
                            </section>
                        </section>
                    </section>

                    <section className='content-item-action'>
                        <div className='content-item-action-btn'>
                            <button>
                                <i className='fa-solid fa-thumbs-up'></i> Accept
                            </button>
                        </div>

                        <div className='content-item-action-more'>
                            <div className='content-item-action-more-btn'>
                                {' '}
                                <i className='fa-solid fa-ellipsis-h'></i>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Invitation;
