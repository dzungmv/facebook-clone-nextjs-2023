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
        <div className={styles.wrapperAbout}>
            <div className='about-left'>
                <div className='title'>About</div>
                <div className='about-left-content'>
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
                </div>
            </div>
            <div className='about-right'>
                {tab === 'Overview' && <Overview />}
                {tab === 'Work and education' && <WorkAndEducation />}
                {tab === 'Places lived' && <PlacesLived />}
                {tab === 'Contact and basic info' && <ContactAndBasicInfo />}
                {tab === 'Family and relationships' && (
                    <FamilyAndRelationships />
                )}
                {tab === 'Details about you' && <DetailsAboutYou />}
                {tab === 'Life events' && <LifeEvents />}
            </div>
        </div>
    );
}

const Overview = () => {
    return (
        <div className={styles.wrapperOverview}>
            <div className='over-item'>
                <div className='over-item-left'>
                    <div className='over-item-left-icon'>
                        <i className='fa-solid fa-briefcase'></i>
                    </div>
                    <div className='over-item-left-name'>
                        <Link href=''>Administrating Director</Link> at{' '}
                        <Link href=''>CareFree+</Link>
                    </div>
                </div>

                <div className='over-item-right'>
                    <div className='over-item-right-icon'>
                        <i className='fa-regular fa-earth-americas'></i>
                    </div>
                    <div className='over-item-right-action'>
                        <i className='fa-solid fa-ellipsis'></i>
                    </div>
                </div>
            </div>

            <div className='over-item'>
                <div className='over-item-left'>
                    <div className='over-item-left-icon'>
                        <i className='fa-sharp fa-solid fa-graduation-cap'></i>
                    </div>
                    <div className='over-item-left-name'>
                        Studied Sotfware Engineering at{' '}
                        <Link href=''>Đại học Tôn Đức Thắng</Link>
                    </div>
                </div>

                <div className='over-item-right'>
                    <div className='over-item-right-icon'>
                        <i className='fa-regular fa-earth-americas'></i>
                    </div>
                    <div className='over-item-right-action'>
                        <i className='fa-solid fa-ellipsis'></i>
                    </div>
                </div>
            </div>

            <div className='over-item'>
                <div className='over-item-left'>
                    <div className='over-item-left-icon'>
                        <i className='fa-solid fa-house-chimney'></i>
                    </div>
                    <div className='over-item-left-name'>
                        Lives in <Link href=''> Ho Chi Minh City, Vietnam</Link>
                    </div>
                </div>

                <div className='over-item-right'>
                    <div className='over-item-right-icon'>
                        <i className='fa-regular fa-earth-americas'></i>
                    </div>
                    <div className='over-item-right-action'>
                        <i className='fa-solid fa-ellipsis'></i>
                    </div>
                </div>
            </div>

            <div className='over-item'>
                <div className='over-item-left'>
                    <div className='over-item-left-icon'>
                        <i className='fa-solid fa-location-dot'></i>
                    </div>
                    <div className='over-item-left-name'>
                        From <Link href=''> Ho Chi Minh City, Vietnam</Link>
                    </div>
                </div>

                <div className='over-item-right'>
                    <div className='over-item-right-icon'>
                        <i className='fa-regular fa-earth-americas'></i>
                    </div>
                    <div className='over-item-right-action'>
                        <i className='fa-solid fa-ellipsis'></i>
                    </div>
                </div>
            </div>

            <div className='over-item'>
                <div className='over-item-left'>
                    <div className='over-item-left-icon'>
                        <i className='fa-solid fa-heart'></i>
                    </div>
                    <div className='over-item-left-name'>Single</div>
                </div>

                <div className='over-item-right'>
                    <div className='over-item-right-icon'>
                        <i className='fa-regular fa-earth-americas'></i>
                    </div>
                    <div className='over-item-right-action'>
                        <i className='fa-solid fa-ellipsis'></i>
                    </div>
                </div>
            </div>

            <div className='over-item'>
                <div className='over-item-left'>
                    <div className='over-item-left-icon'>
                        <i className='fa-solid fa-phone'></i>
                    </div>
                    <div className='over-item-left-name'>
                        <div className='over-item-left-name-phone'>
                            03421241484
                        </div>
                        <span>Mobile</span>
                    </div>
                </div>

                <div className='over-item-right'>
                    <div className='over-item-right-icon'>
                        <i className='fa-regular fa-earth-americas'></i>
                    </div>
                    <div className='over-item-right-action'>
                        <i className='fa-solid fa-ellipsis'></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WorkAndEducation = () => {
    return (
        <div
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
        </div>
    );
};

const PlacesLived = () => {
    return (
        <div
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
        </div>
    );
};

const ContactAndBasicInfo = () => {
    return (
        <div
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
        </div>
    );
};

const FamilyAndRelationships = () => {
    return (
        <div
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
        </div>
    );
};

const DetailsAboutYou = () => {
    return (
        <div
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
        </div>
    );
};

const LifeEvents = () => {
    return (
        <div
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
        </div>
    );
};
