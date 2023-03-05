'use client';

import { useState } from 'react';

import data from '@/components/data/data';
import styles from '../profile.module.scss';

const tabs = ['Your Videos', 'Albums'];

export default function Videos() {
    const [tab, setTab] = useState(tabs[0]);

    return (
        <section className={styles.wrapperVideo}>
            <header className='video-header'>
                <h4 className='video-header-title'>Videos</h4>
                <section className='video-header-tab'>
                    {tabs.map((data, index) => {
                        return (
                            <section
                                key={index}
                                className={
                                    data === tab
                                        ? 'video-header-tab-item active'
                                        : 'video-header-tab-item'
                                }
                                onClick={() => setTab(data)}>
                                <div className='video-header-tab-item-child'>
                                    {data}
                                </div>
                                <div className='active-line'></div>
                            </section>
                        );
                    })}
                </section>
            </header>

            <section className='video-header-content'>
                {tab === 'Your Videos' && <YourVideos />}
                {tab === 'Albums' && <Albums data={data} />}
            </section>
        </section>
    );
}

const YourVideos = () => {
    return (
        <section className={styles.wrapperYourVideo}>
            <section className='video-item'>
                <video>
                    <source
                        src='https://www.youtube.com/watch?v=hWhIb6sChqU'
                        type='video/mp4'
                    />
                </video>
            </section>
            {/* {data?.video && data?.video.length > 0
        ? data?.video?.map((data, index) => {
            return (
             
            );
          })
        : null} */}
        </section>
    );
};

const Albums = ({ data }) => {
    return <section className={styles.wrapperAlbums}>Comming soon!</section>;
};
