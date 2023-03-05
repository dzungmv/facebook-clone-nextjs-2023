'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from '../profile.module.scss';

const nav_items = [
    'Overview',
    'Work and education',
    'Places lived',
    'Contact and basic info',
    'Family and relationships',
    'Details about you',
    'Life events',
];

export default function About() {
    const [tab, setTab] = useState(nav_items[0]);
    return (
        <section className={styles.wrapperAbout}>
            <section className='about-left'>
                <h4 className='title'>About</h4>
                <section className='about-left-content'>
                    {nav_items.map((item, index) => (
                        <div
                            key={index}
                            className={
                                item === tab
                                    ? 'about-left-item active'
                                    : 'about-left-item'
                            }
                            onClick={() => setTab(item)}>
                            {item}
                        </div>
                    ))}
                </section>
            </section>
            <section className='about-right'>
                {tab === 'Overview' && <Overview />}
                {tab === 'Work and education' && <WorkAndEducation />}
                {tab === 'Places lived' && <PlacesLived />}
                {tab === 'Contact and basic info' && <ContactAndBasicInfo />}
                {tab === 'Family and relationships' && (
                    <FamilyAndRelationships />
                )}
                {tab === 'Details about you' && <DetailsAboutYou />}
                {tab === 'Life events' && <LifeEvents />}
            </section>
        </section>
    );
}

const Overview = () => {
    return (
        <section className={styles.wrapperOverview}>
            <section className='over-item'>
                <section className='over-item-left'>
                    <div className='over-item-left-icon'>
                        <i className='fa-solid fa-briefcase'></i>
                    </div>
                    <section className='over-item-left-name'>
                        <Link href=''>Administrating Director</Link> at{' '}
                        <Link href=''>CareFree+</Link>
                    </section>
                </section>

                <section className='over-item-right'>
                    <div className='over-item-right-icon'>
                        <i className='fa-regular fa-earth-americas'></i>
                    </div>
                    <div className='over-item-right-action'>
                        <i className='fa-solid fa-ellipsis'></i>
                    </div>
                </section>
            </section>

            <section className='over-item'>
                <section className='over-item-left'>
                    <div className='over-item-left-icon'>
                        <i className='fa-sharp fa-solid fa-graduation-cap'></i>
                    </div>
                    <div className='over-item-left-name'>
                        Studied Sotfware Engineering at{' '}
                        <Link href=''>Đại học Tôn Đức Thắng</Link>
                    </div>
                </section>

                <section className='over-item-right'>
                    <div className='over-item-right-icon'>
                        <i className='fa-regular fa-earth-americas'></i>
                    </div>
                    <div className='over-item-right-action'>
                        <i className='fa-solid fa-ellipsis'></i>
                    </div>
                </section>
            </section>

            <section className='over-item'>
                <section className='over-item-left'>
                    <div className='over-item-left-icon'>
                        <i className='fa-solid fa-house-chimney'></i>
                    </div>
                    <div className='over-item-left-name'>
                        Lives in <Link href=''> Ho Chi Minh City, Vietnam</Link>
                    </div>
                </section>

                <section className='over-item-right'>
                    <div className='over-item-right-icon'>
                        <i className='fa-regular fa-earth-americas'></i>
                    </div>
                    <div className='over-item-right-action'>
                        <i className='fa-solid fa-ellipsis'></i>
                    </div>
                </section>
            </section>

            <section className='over-item'>
                <section className='over-item-left'>
                    <div className='over-item-left-icon'>
                        <i className='fa-solid fa-location-dot'></i>
                    </div>
                    <div className='over-item-left-name'>
                        From <Link href=''> Ho Chi Minh City, Vietnam</Link>
                    </div>
                </section>

                <section className='over-item-right'>
                    <div className='over-item-right-icon'>
                        <i className='fa-regular fa-earth-americas'></i>
                    </div>
                    <div className='over-item-right-action'>
                        <i className='fa-solid fa-ellipsis'></i>
                    </div>
                </section>
            </section>

            <section className='over-item'>
                <section className='over-item-left'>
                    <div className='over-item-left-icon'>
                        <i className='fa-solid fa-heart'></i>
                    </div>
                    <span className='over-item-left-name'>Single</span>
                </section>

                <div className='over-item-right'>
                    <div className='over-item-right-icon'>
                        <i className='fa-regular fa-earth-americas'></i>
                    </div>
                    <div className='over-item-right-action'>
                        <i className='fa-solid fa-ellipsis'></i>
                    </div>
                </div>
            </section>

            <section className='over-item'>
                <section className='over-item-left'>
                    <div className='over-item-left-icon'>
                        <i className='fa-solid fa-phone'></i>
                    </div>
                    <section className='over-item-left-name'>
                        <p className='over-item-left-name-phone'>03421241484</p>
                        <span>Mobile</span>
                    </section>
                </section>

                <section className='over-item-right'>
                    <div className='over-item-right-icon'>
                        <i className='fa-regular fa-earth-americas'></i>
                    </div>
                    <div className='over-item-right-action'>
                        <i className='fa-solid fa-ellipsis'></i>
                    </div>
                </section>
            </section>
        </section>
    );
};

const WorkAndEducation = () => {
    return (
        <section
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(0,0,0,0.5)',
            }}>
            Update soon!
        </section>
    );
};

const PlacesLived = () => {
    return (
        <section
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(0,0,0,0.5)',
            }}>
            Update soon!
        </section>
    );
};

const ContactAndBasicInfo = () => {
    return (
        <section
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(0,0,0,0.5)',
            }}>
            Update soon!
        </section>
    );
};

const FamilyAndRelationships = () => {
    return (
        <section
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(0,0,0,0.5)',
            }}>
            Update soon!
        </section>
    );
};

const DetailsAboutYou = () => {
    return (
        <section
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(0,0,0,0.5)',
            }}>
            Update soon!
        </section>
    );
};

const LifeEvents = () => {
    return (
        <section
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(0,0,0,0.5)',
            }}>
            Update soon!
        </section>
    );
};
