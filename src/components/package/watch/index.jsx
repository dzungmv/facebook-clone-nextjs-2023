'use client';

import { useState } from 'react';

import WatchHome from './home';
import styles from './watch.module.scss';

const tabs = [
    {
        id: 1,
        title: 'Home',
        icon: 'fa-solid fa-home',
    },
    {
        id: 2,
        title: 'Live',
        icon: 'fa-solid fa-video',
    },
    {
        id: 3,
        title: 'Shows',
        icon: 'fa-solid fa-clapperboard-play',
    },
    {
        id: 4,
        title: 'Saved videos',
        icon: 'fa-solid fa-bookmark',
    },
];

const WatchPage = () => {
    const [tab, setTab] = useState(tabs[0].id);
    return (
        <div className={styles.wrapperWatchPage}>
            <div className='page-left'>
                <div className='page-left-header'>
                    <div className='title'>Watch</div>
                    <div className='page-left-header-action'>
                        <i className='fa-solid fa-gear'></i>
                    </div>
                </div>

                <div className='page-left-search'>
                    <div className='page-left-search-container'>
                        <i className='fa-solid fa-magnifying-glass'></i>
                        <input type='text' placeholder='Search video' />
                    </div>
                </div>

                <div className='page-left-content'>
                    {tabs.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className={
                                    item.id === tab
                                        ? 'page-left-content-item active'
                                        : 'page-left-content-item'
                                }
                                onClick={() => setTab(item.id)}>
                                <div className='page-left-content-item-icon'>
                                    <i className={item.icon}></i>
                                </div>
                                <span>{item.title}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='page-right'>{tab === 1 && <WatchHome />}</div>
        </div>
    );
};

export default WatchPage;
