'use client';

/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

import styles from './pages.module.scss';
import data from '@/components/data/data';
import Image from 'next/image';
import Link from 'next/link';

const PagesSidebar = () => {
    const pathname = usePathname();

    const pageLeftRef = useRef(null);
    const [yourPage, setYourPage] = useState(true);

    return (
        <section className={styles.wrapperSidebar}>
            <section className='sidebar-wrapper'>
                <section
                    useRef={pageLeftRef}
                    className='sidebar-wrapper-container'>
                    <header className='sidebar-wrapper-header'>
                        <h3 className='sidebar-wrapper-header-title'>Pages</h3>
                        <div className='sidebar-wrapper-header-action'>
                            <i className='fa-solid fa-gear'></i>
                        </div>
                    </header>

                    <section className='sidebar-wrapper-content'>
                        <Link
                            href='/pages'
                            className={
                                pathname === '/pages'
                                    ? 'sidebar-wrapper-content-item your-page-section active'
                                    : 'sidebar-wrapper-content-item your-page-section'
                            }>
                            <section className='your-page-header'>
                                <div className='sidebar-wrapper-content-item-icon'>
                                    <i className='fas fa-flag-alt'></i>
                                </div>
                                <span>Your Pages and Profile</span>
                            </section>

                            <section
                                className='your-page-header-drop'
                                onClick={() => setYourPage(!yourPage)}>
                                {yourPage ? (
                                    <i className='fa-solid fa-chevron-up'></i>
                                ) : (
                                    <i className='fa-solid fa-chevron-down'></i>
                                )}
                            </section>
                        </Link>

                        <section className='your-page'>
                            {yourPage && (
                                <section className='your-page-content'>
                                    <section className='your-page-item'>
                                        <figure className='your-page-item-img'>
                                            <Image
                                                src={data.user.page.page_avatar}
                                                alt='text'
                                                width='0'
                                                height='0'
                                                fill={false}
                                                sizes='100vw'
                                            />
                                        </figure>
                                        <p className='your-page-item-name'>
                                            {data.user.page.name}
                                        </p>
                                    </section>
                                </section>
                            )}

                            <div className='your-page-action'>
                                <button>+ Create new page</button>
                            </div>
                        </section>

                        <hr />

                        <section className='link-section'>
                            <section className='link-section-item'>
                                <section className='link-section-left'>
                                    <div className='link-section-left-icon'>
                                        <i className='fa-brands fa-meta'></i>
                                    </div>
                                    <span className='link-section-left-title'>
                                        Meta Business Suite
                                    </span>
                                </section>

                                <div className='link-section-right'>
                                    <i className='fa-light fa-arrow-up-right'></i>
                                </div>
                            </section>

                            <section className='link-section-item'>
                                <section className='link-section-left'>
                                    <div className='link-section-left-icon'>
                                        <i className='fa-regular fa-inbox-full'></i>
                                    </div>
                                    <span className='link-section-left-title'>
                                        Inbox
                                    </span>
                                </section>

                                <div className='link-section-right'>
                                    <i className='fa-light fa-arrow-up-right'></i>
                                </div>
                            </section>

                            <section className='link-section-item'>
                                <section className='link-section-left'>
                                    <div className='link-section-left-icon'>
                                        <i className='fa-regular fa-signal-bars'></i>
                                    </div>
                                    <span className='link-section-left-title'>
                                        Insights
                                    </span>
                                </section>

                                <div className='link-section-right'>
                                    <i className='fa-light fa-arrow-up-right'></i>
                                </div>
                            </section>
                        </section>

                        <hr />
                        <Link
                            href='/pages/discover'
                            className={
                                pathname === '/pages/discover'
                                    ? 'sidebar-wrapper-content-item active'
                                    : 'sidebar-wrapper-content-item'
                            }>
                            <div className='sidebar-wrapper-content-item-icon'>
                                <i className='fa-solid fa-compass'></i>
                            </div>
                            <span>Discover</span>
                        </Link>

                        <Link
                            href='/pages/liked-pages'
                            className={
                                pathname === '/pages/liked-pages'
                                    ? 'sidebar-wrapper-content-item active'
                                    : 'sidebar-wrapper-content-item'
                            }>
                            <div className='sidebar-wrapper-content-item-icon'>
                                <i className='fa-solid fa-thumbs-up'></i>
                            </div>
                            <span>Liked Pages</span>
                        </Link>

                        <Link
                            href='/pages/invitations'
                            className={
                                pathname === '/pages/invitations'
                                    ? 'sidebar-wrapper-content-item active'
                                    : 'sidebar-wrapper-content-item'
                            }>
                            <div className='sidebar-wrapper-content-item-icon'>
                                <i className='fa-solid fa-user-plus'></i>
                            </div>
                            <span>Invitations</span>
                        </Link>
                    </section>
                </section>

                <div
                    className='toggle-bar'
                    onClick={() => {
                        pageLeftRef?.current?.classList.add('active');
                    }}>
                    <i className='fa-solid fa-bars'></i>
                </div>
            </section>
        </section>
    );
};

export default PagesSidebar;
