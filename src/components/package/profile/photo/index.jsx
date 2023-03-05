'use client';

import { useState } from 'react';

import data from '@/components/data/data';
import styles from '../profile.module.scss';
import Image from 'next/image';

const filter = ['Your Photos', 'Albums'];

export default function Photos() {
    const [tab, setTab] = useState(filter[0]);

    return (
        <section className={styles.wrapperPhotos}>
            <header className='photo-header'>
                <section className='photo-header-wrapper'>
                    <h4 className='photo-header-title'>Photos</h4>
                    <section className='photo-header-action'>
                        <div className='photo-header-action-s'>
                            Add photos/video
                        </div>
                        <div className='photo-header-action-b'>
                            <i className='fa-solid fa-ellipsis'></i>
                        </div>
                    </section>
                </section>

                <section className='photo-header-filter'>
                    {filter.map((data, index) => {
                        return (
                            <section
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
                            </section>
                        );
                    })}
                </section>
            </header>

            <section className='photo-content'>
                {tab === 'Your Photos' && <YourPhoto data={data} />}
                {tab === 'Albums' && <Albums />}
            </section>
        </section>
    );
}

const YourPhoto = ({ data }) => {
    return (
        <section className={styles.wrapperYourPhoto}>
            <figure className='your-photo-item'>
                <Image
                    src={data.user.avatar}
                    alt='image'
                    width='0'
                    height='0'
                    sizes='100vw'
                    fill={false}
                />
                <div className='your-photo-item-edit'>
                    <i className='fa-solid fa-pen'></i>
                </div>
            </figure>
        </section>
    );
};

const Albums = () => {
    return <section className={styles.wrapperAlbums}>Comming soon!</section>;
};
