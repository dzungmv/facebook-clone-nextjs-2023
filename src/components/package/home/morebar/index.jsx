import Link from 'next/link';

import styles from '../home.module.scss';

import data from '@/components/data/data.json';
import Image from 'next/image';

const Morebar = () => {
    return (
        <div className={styles.wrapperSubbar}>
            <section className='your-page-profile'>
                <div className='your-page-profile-title'>
                    <span>Your Pages and Profile</span>
                    <div className='your-page-profile-title-action'>
                        <i className='fa-regular fa-ellipsis'></i>
                    </div>
                </div>
                <div className='your-page-profile-panging'>
                    <div className='your-page-profile-panging-avatar'>
                        <Image
                            src={data.user.page.page_avatar}
                            alt='image'
                            width='0'
                            height='0'
                            fill={false}
                            sizes='100vw'
                        />
                    </div>
                    <div className='your-page-profile-panging-name'>
                        {data.user.page.name}
                    </div>
                </div>
                <div className='your-page-profile-content'>
                    <div className='your-page-profile-content-item'>
                        <div className='your-page-profile-content-item-icon'>
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
                        </div>
                        <div className='your-page-profile-content-item-name'>
                            Switch to into page
                        </div>
                    </div>
                    <div className='your-page-profile-content-item'>
                        <div className='your-page-profile-content-item-icon'>
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
                        </div>
                        <div className='your-page-profile-content-item-name'>
                            Create promotion
                        </div>
                    </div>
                </div>
            </section>

            <section className='friend-request'>
                <div className='friend-request-header'>
                    <span>Friend requests</span>
                    <Link href='' className='friend-request-header-action'>
                        See all
                    </Link>
                </div>

                {
                    <div className='friend-request-content'>
                        <div className='friend-request-content-left'>
                            <Image
                                src={data.user.friend_request[0].user_avatar}
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </div>
                        <div className='friend-request-content-right'>
                            <div className='friend-request-content-right-info'>
                                <div className='friend-request-content-right-info-user'>
                                    <div className='friend-request-content-right-info-user-name'>
                                        {data.user.friend_request[0].user_name}
                                    </div>
                                    <div className='friend-request-content-right-info-user-friend'>
                                        {
                                            data.user.friend_request[0]
                                                .friend_mutual
                                        }{' '}
                                        mutual friends
                                    </div>
                                </div>

                                <div className='friend-request-content-right-info-time'>
                                    {data.user.friend_request[0].time_request}
                                </div>
                            </div>

                            <div className='friend-request-content-right-action'>
                                <button>Confirm</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    </div>
                }
            </section>

            <section className='birthday'>
                <div className='birthday-title'>Birthdays</div>
                <div className='birthday-content'>
                    <div className='birthday-content-left'>
                        <Image
                            src={data.users[1].avatar}
                            alt='image'
                            width='0'
                            height='0'
                            fill={false}
                            sizes='100vw'
                        />
                    </div>
                    <div className='birthday-content-right'>
                        <span>{data.users[1].name}</span> and{' '}
                        <span>4 other</span> have their birthday today.
                    </div>
                </div>
            </section>

            <section className='contact'>
                <div className='contact-header'>
                    <span>Contacts</span>
                    <div className='contact-header-action'>
                        <div className='contact-header-action-item'>
                            <i className='fal fa-video'></i>
                        </div>
                        <div className='contact-header-action-item'>
                            <i className='fa-regular fa-magnifying-glass'></i>
                        </div>
                        <div className='contact-header-action-item'>
                            <i className='fa-regular fa-ellipsis'></i>
                        </div>
                    </div>
                </div>

                <div className='contact-content'>
                    {data.users.map((user) => {
                        return (
                            <div key={user.id} className='contact-content-item'>
                                <div className='contact-content-item-left'>
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
                                </div>
                                <div className='contact-content-item-right'>
                                    {user.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Morebar;
