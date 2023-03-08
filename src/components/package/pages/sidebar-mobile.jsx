'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './pages.module.scss';

const tab = [
    {
        id: 1,
        name: 'Your Pages',
        path: '',
        icon: 'fas fa-flag-alt',
    },
    {
        id: 2,
        name: 'Discover',
        path: '/discover',
        icon: 'fa-solid fa-compass',
    },
    {
        id: 3,
        name: 'Liked Pages',
        path: '/liked-pages',
        icon: 'fa-solid fa-thumbs-up',
    },
    {
        id: 4,
        name: 'Invitations',
        path: '/invitations',
        icon: 'fa-solid fa-user-plus',
    },
];

const SidebarMobile = () => {
    const pathname = usePathname();

    return (
        <nav className={styles.wrapperSidebarMobile}>
            {tab.map((item) => {
                return (
                    <Link
                        href={`/pages${item.path}`}
                        key={item.id}
                        className={
                            pathname === `/pages${item.path}`
                                ? 'nav-item nav-item-active'
                                : 'nav-item'
                        }>
                        <div className='nav-item-icon'>
                            <i className={item.icon}></i>
                        </div>
                        <span className='nav-item-name'>{item.name}</span>
                    </Link>
                );
            })}
        </nav>
    );
};

export default SidebarMobile;
