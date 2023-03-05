'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import styles from './market.module.scss';

const tabs = [
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

const AsideBar = () => {
    const pathname = usePathname();

    return (
        <section className={styles.wrapperWatchPage}>
            <section className='page-left'>
                <section className='page-left-container'>
                    <section className='page-left-header'>
                        <h3 className='title'>Marketplace</h3>
                        <div className='page-left-header-action'>
                            <i className='fa-solid fa-gear'></i>
                        </div>
                    </section>

                    <section className='page-left-search'>
                        <section className='page-left-search-container'>
                            <i className='fa-solid fa-magnifying-glass'></i>
                            <input
                                type='text'
                                placeholder='Search marketplace'
                            />
                        </section>
                    </section>

                    <section className='page-left-content'>
                        {tabs.map((item) => {
                            return (
                                <Link
                                    href={`/marketplace/${item.url}`}
                                    key={item.id}
                                    className={
                                        `/marketplace${item.url}` === pathname
                                            ? 'page-left-content-item active'
                                            : 'page-left-content-item'
                                    }>
                                    <section className='section-left'>
                                        <div className='page-left-content-item-icon'>
                                            <i className={item.icon}></i>
                                        </div>
                                        <span>{item.title}</span>
                                    </section>

                                    {item.sub_icon && (
                                        <i className={item.sub_icon}></i>
                                    )}
                                </Link>
                            );
                        })}
                    </section>

                    <div className='page-left-action'>
                        <button>
                            <i className='fa-regular fa-plus'></i>
                            Create new listing
                        </button>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default AsideBar;

export const LivePage = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '90vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem',
                color: 'grey',
                fontWeight: 'bold',
            }}>
            Comming soon!
        </div>
    );
};

export const ShowPages = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '90vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem',
                color: 'grey',
                fontWeight: 'bold',
            }}>
            Comming soon!
        </div>
    );
};

export const SavedPage = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '90vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem',
                color: 'grey',
                fontWeight: 'bold',
            }}>
            Comming soon!
        </div>
    );
};
