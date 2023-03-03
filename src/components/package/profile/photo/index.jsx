'use client';

import { useState } from 'react';

import data from '@/components/data/data';
import styles from '../profile.module.scss';

const filter = ['Your Photos', 'Albums'];

export default function Photos() {
    const [tab, setTab] = useState(filter[0]);

    return (
        <div className={styles.wrapperPhotos}>
            <div className='photo-header'>
                <div className='photo-header-wrapper'>
                    <div className='photo-header-title'>Photos</div>
                    <div className='photo-header-action'>
                        <div className='photo-header-action-s'>
                            Add photos/video
                        </div>
                        <div className='photo-header-action-b'>
                            <i className='fa-solid fa-ellipsis'></i>
                        </div>
                    </div>
                </div>

                <div className='photo-header-filter'>
                    {filter.map((data, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    data === tab
                                        ? 'photo-header-filter-item active'
                                        : 'photo-header-filter-item'
                                }
                                onClick={() => setTab(data)}>
                                <div className='photo-header-filter-item-child'>
                                    {data}
                                </div>
                                <div className='active-line'></div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className='photo-content'>
                {tab === 'Your Photos' && <YourPhoto data={data} />}
                {tab === 'Albums' && <Albums />}
            </div>
        </div>
    );
}

const YourPhoto = ({ data }) => {
    return (
        <div className={styles.wrapperYourPhoto}>
            <div className='your-photo-item'>
                <img src={data.user.avatar} alt='' loading='lazy' />
                <div className='your-photo-item-edit'>
                    <i className='fa-solid fa-pen'></i>
                </div>
            </div>
        </div>
    );
};

const Albums = () => {
    return <div className={styles.wrapperAlbums}>Comming soon!</div>;
};
