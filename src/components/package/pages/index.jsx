'use client';

/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from 'react';

import YourPagesAndProfile from './yourspage';
import Discover from './discover';
import LikedPage from './likepage';
import Invitation from './invitation';

import styles from './pages.module.scss';
import data from '@/components/data/data';
import Image from 'next/image';

export default function Pages() {
    const pageLeftRef = useRef(null);
    const [tab, setTab] = useState(0);
    const [yourPage, setYourPage] = useState(true);

    return (
        <div className={styles.wrapperPages}>
            <div className='pages-left'>
                <div useRef={pageLeftRef} className='pages-left-container'>
                    <div className='pages-left-header'>
                        <div className='pages-left-header-title'>Pages</div>
                        <div className='pages-left-header-action'>
                            <i className='fa-solid fa-gear'></i>
                        </div>
                    </div>

                    <div className='pages-left-content'>
                        <div
                            className={
                                tab === 0
                                    ? 'pages-left-content-item your-page-section active'
                                    : 'pages-left-content-item your-page-section'
                            }
                            onClick={() => {
                                setTab(0);
                            }}>
                            <div className='your-page-header'>
                                <div className='pages-left-content-item-icon'>
                                    <i className='fas fa-flag-alt'></i>
                                </div>
                                <span>Your Pages and Profile</span>
                            </div>

                            <div
                                className='your-page-header-drop'
                                onClick={() => setYourPage(!yourPage)}>
                                {yourPage ? (
                                    <i className='fa-solid fa-chevron-up'></i>
                                ) : (
                                    <i className='fa-solid fa-chevron-down'></i>
                                )}
                            </div>
                        </div>

                        <div className='your-page'>
                            {yourPage && (
                                <div className='your-page-content'>
                                    <div className='your-page-item'>
                                        <div className='your-page-item-img'>
                                            <Image
                                                src={data.user.page.page_avatar}
                                                alt='text'
                                                width='0'
                                                height='0'
                                                fill={false}
                                                sizes='100vw'
                                            />
                                        </div>
                                        <div className='your-page-item-name'>
                                            {data.user.page.name}
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className='your-page-action'>
                                <button>+ Create new page</button>
                            </div>
                        </div>

                        <hr />

                        <div className='link-section'>
                            <div className='link-section-item'>
                                <div className='link-section-left'>
                                    <div className='link-section-left-icon'>
                                        <i className='fa-brands fa-meta'></i>
                                    </div>
                                    <div className='link-section-left-title'>
                                        Meta Business Suite
                                    </div>
                                </div>

                                <div className='link-section-right'>
                                    <i className='fa-light fa-arrow-up-right'></i>
                                </div>
                            </div>

                            <div className='link-section-item'>
                                <div className='link-section-left'>
                                    <div className='link-section-left-icon'>
                                        <i className='fa-regular fa-inbox-full'></i>
                                    </div>
                                    <div className='link-section-left-title'>
                                        Inbox
                                    </div>
                                </div>

                                <div className='link-section-right'>
                                    <i className='fa-light fa-arrow-up-right'></i>
                                </div>
                            </div>

                            <div className='link-section-item'>
                                <div className='link-section-left'>
                                    <div className='link-section-left-icon'>
                                        <i className='fa-regular fa-signal-bars'></i>
                                    </div>
                                    <div className='link-section-left-title'>
                                        Insights
                                    </div>
                                </div>

                                <div className='link-section-right'>
                                    <i className='fa-light fa-arrow-up-right'></i>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div
                            className={
                                tab === 1
                                    ? 'pages-left-content-item active'
                                    : 'pages-left-content-item'
                            }
                            onClick={() => {
                                setTab(1);
                            }}>
                            <div className='pages-left-content-item-icon'>
                                <i className='fa-solid fa-compass'></i>
                            </div>
                            <span>Discover</span>
                        </div>

                        <div
                            className={
                                tab === 2
                                    ? 'pages-left-content-item active'
                                    : 'pages-left-content-item'
                            }
                            onClick={() => {
                                setTab(2);
                            }}>
                            <div className='pages-left-content-item-icon'>
                                <i className='fa-solid fa-thumbs-up'></i>
                            </div>
                            <span>Liked Pages</span>
                        </div>

                        <div
                            className={
                                tab === 3
                                    ? 'pages-left-content-item active'
                                    : 'pages-left-content-item'
                            }
                            onClick={() => {
                                setTab(3);
                            }}>
                            <div className='pages-left-content-item-icon'>
                                <i className='fa-solid fa-user-plus'></i>
                            </div>
                            <span>Invitations</span>
                        </div>
                    </div>
                </div>

                <div
                    className='toggle-bar'
                    onClick={() => {
                        pageLeftRef?.current?.classList.add('active');
                    }}>
                    <i className='fa-solid fa-bars'></i>
                </div>
            </div>
            <div className='pages-right'>
                {tab === 0 && <YourPagesAndProfile data={data} />}
                {tab === 1 && <Discover />}
                {tab === 2 && <LikedPage />}
                {tab === 3 && <Invitation data={data} />}
            </div>
        </div>
    );
}
