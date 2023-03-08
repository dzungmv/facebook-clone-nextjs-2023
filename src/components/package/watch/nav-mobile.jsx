'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './watch.module.scss';

const tab = [
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

const NavMobile = () => {
    const pathname = usePathname();

    return (
        <nav className={styles.wrapperNavMobile}>
            {tab.map((item) => {
                return (
                    <Link
                        href={`/watch${item.url}`}
                        key={item.id}
                        className={
                            pathname === `/watch${item.url}`
                                ? 'nav-item nav-item-active'
                                : 'nav-item'
                        }>
                        <div className='nav-item-icon'>
                            <i className={item.icon}></i>
                        </div>
                        <span className='nav-item-name'>{item.title}</span>
                    </Link>
                );
            })}
        </nav>
    );
};

export default NavMobile;
