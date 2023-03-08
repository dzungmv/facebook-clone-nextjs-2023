'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import data from '@/components/data/data';
import styles from '../groups.module.scss';

const NAVS = [
    {
        id: 1,
        name: 'About',
        url: '/about',
    },
    {
        id: 2,
        name: 'Discusion',
        url: '',
    },
    {
        id: 3,
        name: 'Mentorship',
        url: '/mentorship',
    },
    {
        id: 4,
        name: 'Featured',
        url: '/featured',
    },
    {
        id: 5,
        name: 'Reels',
        url: '/reels',
    },
    {
        id: 6,
        name: 'Topics',
        url: '/topics',
    },
    {
        id: 7,
        name: 'Members',
        url: '/members',
    },
];

const GroupHeader = () => {
    const pathname = usePathname();
    return (
        <header className={styles.wrapperGroupHeader}>
            <section className='header-container'>
                <figure className='header-img'>
                    <Image
                        src='https://jungjung261.blob.core.windows.net/nextjs-project/group/group-fb.jpeg'
                        fill={false}
                        alt='group'
                        width='0'
                        height='0'
                        sizes='100vw'
                    />
                </figure>
                <div className='header-footing'>
                    <p>Group by Facebook</p>
                </div>

                <section className='header-content'>
                    <h2 className='group-name'>Facebook</h2>
                    <section className='group-des'>
                        <div className='group-des-privacy'>
                            <i className='fa-regular fa-earth-americas'></i>
                            <span>Public</span>
                        </div>
                        <p className=''>· 81.5b members</p>
                    </section>

                    <section className='group-action'>
                        <section className='group-action-left'>
                            {data.users.map((item, index) => {
                                return (
                                    <figure key={item.id} className='left-item'>
                                        <Image
                                            src={item.avatar}
                                            alt='avatar'
                                            width='0'
                                            height='0'
                                            fill={false}
                                            sizes='100vw'
                                        />
                                    </figure>
                                );
                            })}
                        </section>

                        <section className='group-action-right'>
                            <button className='right-item'>
                                <i className='fa-solid fa-user-check'></i>
                                <span>Joined</span>
                                <i className='fa-solid fa-caret-down'></i>
                            </button>

                            <button className='right-item'>
                                <i className='fa-solid fa-plus'></i>
                                <span>Invite</span>
                            </button>

                            <button className='right-item'>
                                <i className='fa-solid fa-chevron-down'></i>
                            </button>
                        </section>
                    </section>

                    <hr />

                    <nav className='group-nav'>
                        <section className='group-nav-left'>
                            {NAVS.map((item) => {
                                return (
                                    <section
                                        key={item.id}
                                        className={
                                            pathname === `/groups${item.url}`
                                                ? 'nav-item-wrapper nav-item-wrapper-active'
                                                : 'nav-item-wrapper'
                                        }>
                                        <Link
                                            href={`/groups${item.url}`}
                                            className='nav-item'>
                                            {item.name}
                                        </Link>

                                        <div className='nav-item-line'></div>
                                    </section>
                                );
                            })}

                            <section className='nav-item-wrapper'>
                                <div className='nav-item'>
                                    <span>More</span>
                                    <i className='fa-solid fa-caret-down'></i>
                                </div>
                            </section>
                        </section>

                        <section className='group-nav-right'>
                            <button className='nav-action'>
                                <i className='fa-solid fa-magnifying-glass'></i>
                            </button>

                            <button className='nav-action'>
                                <i className='fa-solid fa-ellipsis'></i>
                            </button>
                        </section>
                    </nav>
                </section>
            </section>
        </header>
    );
};

export default GroupHeader;
