'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './watch.module.scss';

const tabs = [
    {
        id: 1,
        title: 'Home',
        icon: 'fa-solid fa-home',
        url: '',
    },
    {
        id: 2,
        title: 'Live',
        icon: 'fa-solid fa-video',
        url: '/live',
    },
    {
        id: 3,
        title: 'Shows',
        icon: 'fa-solid fa-clapperboard-play',
        url: '/shows',
    },
    {
        id: 4,
        title: 'Saved videos',
        icon: 'fa-solid fa-bookmark',
        url: '/saved',
    },
];

const WatchSidebar = () => {
    const pathname = usePathname();
    return (
        <section className={styles.wrapperWatchSidebar}>
            <section className='page-left'>
                <section className='page-left-container'>
                    <section className='page-left-header'>
                        <h4 className='title'>Watch</h4>
                        <div className='page-left-header-action'>
                            <i className='fa-solid fa-gear'></i>
                        </div>
                    </section>

                    <section className='page-left-search'>
                        <section className='page-left-search-container'>
                            <i className='fa-solid fa-magnifying-glass'></i>
                            <input type='text' placeholder='Search video' />
                        </section>
                    </section>

                    <section className='page-left-content'>
                        {tabs.map((item) => {
                            return (
                                <Link
                                    href={`/watch${item.url}`}
                                    key={item.id}
                                    className={
                                        `/watch${item.url}` === pathname
                                            ? 'page-left-content-item active'
                                            : 'page-left-content-item'
                                    }>
                                    <div className='page-left-content-item-icon'>
                                        <i className={item.icon}></i>
                                    </div>
                                    <span>{item.title}</span>
                                </Link>
                            );
                        })}
                    </section>
                </section>
            </section>
        </section>
    );
};

export default WatchSidebar;
