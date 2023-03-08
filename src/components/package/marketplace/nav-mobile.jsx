'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './market.module.scss';

const tab = [
    {
        id: 1,
        title: 'Browse all',
        icon: 'fa-solid fa-store',
        url: '',
    },
    {
        id: 2,
        title: 'Notifications',
        icon: 'fa-solid fa-bell',
        url: '/notifications',
    },
    {
        id: 3,
        title: 'Inbox',
        icon: 'fa-solid fa-inbox',
        url: '/inbox',
    },
    {
        id: 4,
        title: 'Buying',
        icon: 'fa-solid fa-bags-shopping',
        sub_icon: 'fa-solid fa-chevron-right',
        url: '/buying',
    },
    {
        id: 5,
        title: 'Selling',
        icon: 'fa-solid fa-tags',
        sub_icon: 'fa-solid fa-chevron-right',
        url: '/selling',
    },
];

const NavMobile = () => {
    const pathname = usePathname();

    return (
        <nav className={styles.wrapperNavMobile}>
            {tab.map((item) => {
                return (
                    <Link
                        href={`/marketplace${item.url}`}
                        key={item.id}
                        className={
                            pathname === `/marketplace${item.url}`
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
