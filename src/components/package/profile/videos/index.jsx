'use client';

import { useState } from 'react';

import data from '@/components/data/data';
import styles from '../profile.module.scss';

const tabs = ['Your Videos', 'Albums'];

export default function Videos() {
    const [tab, setTab] = useState(tabs[0]);

    return (
        <div className={styles.wrapperVideo}>
            <div className='video-header'>
                <div className='video-header-title'>Videos</div>
                <div className='video-header-tab'>
                    {tabs.map((data, index) => {
                        return (
                            <div
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
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className='video-header-content'>
                {tab === 'Your Videos' && <YourVideos data={data} />}
                {tab === 'Albums' && <Albums data={data} />}
            </div>
        </div>
    );
}

const YourVideos = ({ data }) => {
    return (
        <div className={styles.wrapperYourVideo}>
            <div className='video-item'>
                <video control>
                    <source
                        src='https://www.youtube.com/watch?v=hWhIb6sChqU'
                        type='video/mp4'
                    />
                </video>
            </div>
            {/* {data?.video && data?.video.length > 0
        ? data?.video?.map((data, index) => {
            return (
             
            );
          })
        : null} */}
        </div>
    );
};

const Albums = ({ data }) => {
    return <div className={styles.wrapperAlbums}>Comming soon!</div>;
};
