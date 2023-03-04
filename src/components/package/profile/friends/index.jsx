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
        <div className={styles.wrapperFriends}>
            <div className='friends-header'>
                <div className='friends-header-wrapper'>
                    <div className='friends-header-title'>Friends</div>
                    <div className='friends-header-action'>
                        <div className='friends-header-action-search'>
                            <i className='fa-solid fa-search'></i>
                            <input type='text' placeholder='Search' />
                        </div>
                        <div className='action-content'>
                            <div className='friends-header-action-s'>
                                <span>Find requests</span>
                            </div>

                            <div className='friends-header-action-s'>
                                <span>Find friends</span>
                            </div>

                            <div className='friends-header-action-b'>
                                <i className='fa-solid fa-ellipsis'></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='friends-header-filter'>
                    {filter_items.map((item, index) => (
                        <div
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
                        </div>
                    ))}
                </div>
            </div>

            <div className='friends-content'>
                {tab === 'All friends' && <AllFreinds data={data} />}
                {tab === 'Recently added' && <RecentlyAdded data={data} />}
                {tab === 'Birthday' && <Birthday data={data} />}
                {tab === 'University' && <University data={data} />}
                {tab === 'Current City' && <CurrentCity data={data} />}
                {tab === 'Home Town' && <HomeTown data={data} />}
                {tab === 'Followers' && <Followers data={data} />}
                {tab === 'Following' && <Following data={data} />}
            </div>
        </div>
    );
}

const AllFreinds = ({ data }) => {
    return (
        <div className={styles.wrapperAllFriends}>
            {data.users.map((item) => {
                return (
                    <div key={item.id} className='friend-item'>
                        <div className='friend-item-left'>
                            <div className='friend-item-left-avatar'>
                                <Image
                                    src={item.avatar}
                                    alt='image'
                                    width='0'
                                    height='0'
                                    sizes='100vw'
                                    fill={false}
                                />
                            </div>
                            <div className='friend-item-left-name'>
                                {item.name}
                            </div>
                        </div>

                        <div className='friend-item-right'>
                            <div className='friend-item-right-action'>
                                <i className='fa-solid fa-ellipsis'></i>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const RecentlyAdded = () => {
    return (
        <div
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
        </div>
    );
};

const Birthday = () => {
    return (
        <div
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
        </div>
    );
};

const University = () => {
    return (
        <div
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
        </div>
    );
};

const CurrentCity = () => {
    return (
        <div
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
        </div>
    );
};

const HomeTown = () => {
    return (
        <div
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
        </div>
    );
};

const Followers = ({ data }) => {
    return (
        <div className={styles.wrapperAllFriends}>
            {data.users.map((item) => {
                return (
                    <div key={item.id} className='friend-item'>
                        <div className='friend-item-left'>
                            <div className='friend-item-left-avatar'>
                                <Image
                                    src={item.avatar}
                                    alt='image'
                                    width='0'
                                    height='0'
                                    sizes='100vw'
                                    fill={false}
                                />
                            </div>
                            <div className='friend-item-left-name'>
                                {item.name}
                            </div>
                        </div>

                        <div className='friend-item-right'>
                            <div className='friend-item-right-action'>
                                <i className='fa-solid fa-ellipsis'></i>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const Following = ({ data }) => {
    return (
        <div className={styles.wrapperAllFriends}>
            {data.users.map((item) => {
                return (
                    <div key={item.id} className='friend-item'>
                        <div className='friend-item-left'>
                            <div className='friend-item-left-avatar'>
                                <Image
                                    src={item.avatar}
                                    alt='image'
                                    width='0'
                                    height='0'
                                    sizes='100vw'
                                    fill={false}
                                />
                            </div>
                            <div className='friend-item-left-name'>
                                {item.name}
                            </div>
                        </div>

                        <div className='friend-item-right'>
                            <div className='friend-item-right-action'>
                                <i className='fa-solid fa-ellipsis'></i>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
