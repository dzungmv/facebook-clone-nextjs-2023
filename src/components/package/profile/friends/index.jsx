'use client';

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import styles from '../profile.module.scss';
import data from '@/components/data/data';
import Image from 'next/image';

const filter_items = [
    'All friends',
    'Recently added',
    'Birthday',
    'University',
    'Current City',
    'Home Town',
    'Followers',
    'Following',
];

export default function Friends() {
    const [tab, setTab] = useState(filter_items[0]);
    return (
        <section className={styles.wrapperFriends}>
            <section className='friends-header'>
                <section className='friends-header-wrapper'>
                    <h4 className='friends-header-title'>Friends</h4>
                    <header className='friends-header-action'>
                        <section className='friends-header-action-search'>
                            <i className='fa-solid fa-search'></i>
                            <input type='text' placeholder='Search' />
                        </section>
                        <section className='action-content'>
                            <div className='friends-header-action-s'>
                                <span>Find requests</span>
                            </div>

                            <div className='friends-header-action-s'>
                                <span>Find friends</span>
                            </div>

                            <div className='friends-header-action-b'>
                                <i className='fa-solid fa-ellipsis'></i>
                            </div>
                        </section>
                    </header>
                </section>

                <section className='friends-header-filter'>
                    {filter_items.map((item, index) => (
                        <section
                            key={index}
                            className={
                                item === tab
                                    ? 'friends-header-filter-item active'
                                    : 'friends-header-filter-item'
                            }
                            onClick={() => setTab(item)}>
                            <div className='friends-header-filter-item-child'>
                                {item}
                            </div>

                            <div className='active-line'></div>
                        </section>
                    ))}
                </section>
            </section>

            <section className='friends-content'>
                {tab === 'All friends' && <AllFreinds data={data} />}
                {tab === 'Recently added' && <RecentlyAdded data={data} />}
                {tab === 'Birthday' && <Birthday data={data} />}
                {tab === 'University' && <University data={data} />}
                {tab === 'Current City' && <CurrentCity data={data} />}
                {tab === 'Home Town' && <HomeTown data={data} />}
                {tab === 'Followers' && <Followers data={data} />}
                {tab === 'Following' && <Following data={data} />}
            </section>
        </section>
    );
}

const AllFreinds = ({ data }) => {
    return (
        <section className={styles.wrapperAllFriends}>
            {data.users.map((item) => {
                return (
                    <section key={item.id} className='friend-item'>
                        <section className='friend-item-left'>
                            <figure className='friend-item-left-avatar'>
                                <Image
                                    src={item.avatar}
                                    alt='image'
                                    width='0'
                                    height='0'
                                    sizes='100vw'
                                    fill={false}
                                />
                            </figure>
                            <div className='friend-item-left-name'>
                                {item.name}
                            </div>
                        </section>

                        <section className='friend-item-right'>
                            <div className='friend-item-right-action'>
                                <i className='fa-solid fa-ellipsis'></i>
                            </div>
                        </section>
                    </section>
                );
            })}
        </section>
    );
};

const RecentlyAdded = () => {
    return (
        <section
            style={{
                minHeight: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(0,0,0,0.5)',
            }}>
            Comming soon!
        </section>
    );
};

const Birthday = () => {
    return (
        <section
            style={{
                minHeight: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(0,0,0,0.5)',
            }}>
            Comming soon!
        </section>
    );
};

const University = () => {
    return (
        <section
            style={{
                minHeight: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(0,0,0,0.5)',
            }}>
            Comming soon!
        </section>
    );
};

const CurrentCity = () => {
    return (
        <section
            style={{
                minHeight: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(0,0,0,0.5)',
            }}>
            Comming soon!
        </section>
    );
};

const HomeTown = () => {
    return (
        <section
            style={{
                minHeight: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(0,0,0,0.5)',
            }}>
            Comming soon!
        </section>
    );
};

const Followers = ({ data }) => {
    return (
        <section className={styles.wrapperAllFriends}>
            {data.users.map((item) => {
                return (
                    <section key={item.id} className='friend-item'>
                        <section className='friend-item-left'>
                            <figure className='friend-item-left-avatar'>
                                <Image
                                    src={item.avatar}
                                    alt='image'
                                    width='0'
                                    height='0'
                                    sizes='100vw'
                                    fill={false}
                                />
                            </figure>
                            <div className='friend-item-left-name'>
                                {item.name}
                            </div>
                        </section>

                        <section className='friend-item-right'>
                            <div className='friend-item-right-action'>
                                <i className='fa-solid fa-ellipsis'></i>
                            </div>
                        </section>
                    </section>
                );
            })}
        </section>
    );
};

const Following = ({ data }) => {
    return (
        <section className={styles.wrapperAllFriends}>
            {data.users.map((item) => {
                return (
                    <section key={item.id} className='friend-item'>
                        <section className='friend-item-left'>
                            <figure className='friend-item-left-avatar'>
                                <Image
                                    src={item.avatar}
                                    alt='image'
                                    width='0'
                                    height='0'
                                    sizes='100vw'
                                    fill={false}
                                />
                            </figure>
                            <p className='friend-item-left-name'>{item.name}</p>
                        </section>

                        <section className='friend-item-right'>
                            <div className='friend-item-right-action'>
                                <i className='fa-solid fa-ellipsis'></i>
                            </div>
                        </section>
                    </section>
                );
            })}
        </section>
    );
};
