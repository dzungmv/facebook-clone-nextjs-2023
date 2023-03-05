import Link from 'next/link';

import styles from '../home.module.scss';

import data from '@/components/data/data.json';
import Image from 'next/image';

const Morebar = () => {
    return (
        <section className={styles.wrapperSubbar}>
            <section className='your-page-profile'>
                <section className='your-page-profile-title'>
                    <h4>Your Pages and Profile</h4>
                    <div className='your-page-profile-title-action'>
                        <i className='fa-regular fa-ellipsis'></i>
                    </div>
                </section>
                <section className='your-page-profile-panging'>
                    <figure className='your-page-profile-panging-avatar'>
                        <Image
                            src={data.user.page.page_avatar}
                            alt='image'
                            width='0'
                            height='0'
                            fill={false}
                            sizes='100vw'
                        />
                    </figure>
                    <p className='your-page-profile-panging-name'>
                        {data.user.page.name}
                    </p>
                </section>
                <section className='your-page-profile-content'>
                    <section className='your-page-profile-content-item'>
                        <figure className='your-page-profile-content-item-icon'>
                            <Image
                                src={
                                    'https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/page/swich_page.svg'
                                }
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </figure>
                        <p className='your-page-profile-content-item-name'>
                            Switch to into page
                        </p>
                    </section>
                    <section className='your-page-profile-content-item'>
                        <figure className='your-page-profile-content-item-icon'>
                            <Image
                                src={
                                    'https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/page/promotion.svg'
                                }
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </figure>
                        <p className='your-page-profile-content-item-name'>
                            Create promotion
                        </p>
                    </section>
                </section>
            </section>

            <section className='friend-request'>
                <section className='friend-request-header'>
                    <h4>Friend requests</h4>
                    <Link href='' className='friend-request-header-action'>
                        See all
                    </Link>
                </section>

                {
                    <section className='friend-request-content'>
                        <figure className='friend-request-content-left'>
                            <Image
                                src={data.user.friend_request[0].user_avatar}
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </figure>
                        <section className='friend-request-content-right'>
                            <section className='friend-request-content-right-info'>
                                <section className='friend-request-content-right-info-user'>
                                    <p className='friend-request-content-right-info-user-name'>
                                        {data.user.friend_request[0].user_name}
                                    </p>
                                    <div className='friend-request-content-right-info-user-friend'>
                                        {
                                            data.user.friend_request[0]
                                                .friend_mutual
                                        }{' '}
                                        mutual friends
                                    </div>
                                </section>

                                <div className='friend-request-content-right-info-time'>
                                    {data.user.friend_request[0].time_request}
                                </div>
                            </section>

                            <section className='friend-request-content-right-action'>
                                <button>Confirm</button>
                                <button>Delete</button>
                            </section>
                        </section>
                    </section>
                }
            </section>

            <section className='birthday'>
                <h4 className='birthday-title'>Birthdays</h4>
                <section className='birthday-content'>
                    <figure className='birthday-content-left'>
                        <Image
                            src={data.users[1].avatar}
                            alt='image'
                            width='0'
                            height='0'
                            fill={false}
                            sizes='100vw'
                        />
                    </figure>
                    <section className='birthday-content-right'>
                        <span>{data.users[1].name}</span> and{' '}
                        <span>4 other</span> have their birthday today.
                    </section>
                </section>
            </section>

            <section className='contact'>
                <section className='contact-header'>
                    <h4>Contacts</h4>
                    <section className='contact-header-action'>
                        <div className='contact-header-action-item'>
                            <i className='fal fa-video'></i>
                        </div>
                        <div className='contact-header-action-item'>
                            <i className='fa-regular fa-magnifying-glass'></i>
                        </div>
                        <div className='contact-header-action-item'>
                            <i className='fa-regular fa-ellipsis'></i>
                        </div>
                    </section>
                </section>

                <section className='contact-content'>
                    {data.users.map((user) => {
                        return (
                            <section
                                key={user.id}
                                className='contact-content-item'>
                                <figure className='contact-content-item-left'>
                                    <Image
                                        src={user.avatar}
                                        alt='image'
                                        width='0'
                                        height='0'
                                        fill={false}
                                        sizes='100vw'
                                    />
                                    <div className='contact-content-item-left-active'>
                                        <span></span>
                                    </div>
                                </figure>
                                <p className='contact-content-item-right'>
                                    {user.name}
                                </p>
                            </section>
                        );
                    })}
                </section>
            </section>
        </section>
    );
};

export default Morebar;
