'use client';

import { usePathname } from 'next/navigation';
import Tippy from '@tippyjs/react';

import styles from './profile.module.scss';
import data from '@/components/data/data';
import Link from 'next/link';
import Image from 'next/image';

export default function ProfileHeader() {
    // const router = useRouter();

    const pathname = usePathname();

    const action = [
        { id: 1, name: 'Posts', url: '' },
        { id: 2, name: 'About', url: '/about' },
        {
            id: 3,
            name: 'Friends',
            url: '/friends',
        },
        {
            id: 4,
            name: 'Photos',
            url: '/photos',
        },
        {
            id: 5,
            name: 'Videos',
            url: '/videos',
        },
    ];

    return (
        <div className={styles.wrapperProfile}>
            <section className='profile-header'>
                <div className='profile-header-container'>
                    <div className='profile-header-cover'>
                        <Image
                            src=''
                            alt='image'
                            width='0'
                            height='0'
                            sizes='100vw'
                            fill={false}
                        />
                        <div className='profile-header-cover-add'>
                            <i className='fa-duotone fa-camera'></i>
                            <span>Add Cover Photo</span>
                        </div>
                    </div>

                    <div className='profile-header-info'>
                        <div className='profile-header-info-left'>
                            <div className='profile-header-info-left-avatar'>
                                <Image
                                    src={data.user.avatar}
                                    alt='image'
                                    width='0'
                                    height='0'
                                    sizes='100vw'
                                    fill={false}
                                />
                            </div>
                            <div className='profile-header-info-i'>
                                <div>
                                    <div className='profile-header-info-i-name'>
                                        {data.user.name}
                                    </div>
                                    <div className='profile-header-info-i-friends'>
                                        <span>Friends</span>
                                    </div>
                                    <div className='profile-header-info-i-list'>
                                        <div className='friend-list'>
                                            {data.users && data.users.length > 0
                                                ? data?.users?.map(
                                                      (data, index) => {
                                                          return index < 5 ? (
                                                              <Image
                                                                  key={data.id}
                                                                  src={
                                                                      data.avatar
                                                                  }
                                                                  alt='image'
                                                                  width='0'
                                                                  height='0'
                                                                  sizes='100vw'
                                                                  fill={false}
                                                              />
                                                          ) : index === 5 ? (
                                                              <div
                                                                  key={data.id}
                                                                  className='friend-list-image'
                                                                  style={{
                                                                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${data.avatar})`,
                                                                  }}>
                                                                  <i className='fa-regular fa-ellipsis'></i>
                                                              </div>
                                                          ) : null;
                                                      }
                                                  )
                                                : null}
                                        </div>
                                    </div>
                                </div>

                                <div className='profile-header-info-right'>
                                    <div className='profile-header-info-right-action'>
                                        <div className='profile-header-info-right-action-btn'>
                                            <i className='fa-solid fa-user-plus'></i>
                                            <span>Add to Story</span>
                                        </div>
                                        <div className='profile-header-info-right-action-btn'>
                                            <i className='fa-solid fa-pen'></i>
                                            <span>Edit profile</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='profile-header-action'>
                        <div className='profile-header-action-left'>
                            {action.map((item) => {
                                return (
                                    <Link
                                        href={`/profile${item.url}`}
                                        key={item.id}
                                        className={
                                            `/profile${item.url}` === pathname
                                                ? 'profile-header-action-left-item tab-active'
                                                : 'profile-header-action-left-item'
                                        }>
                                        <div className='profile-header-action-left-item-child'>
                                            {item.name}
                                        </div>

                                        <div className='line-active'></div>
                                    </Link>
                                );
                            })}
                            <div className='profile-header-action-left-item'>
                                <Tippy
                                    content={<MoreTipy />}
                                    theme='light'
                                    placement='bottom-start'
                                    interactive={true}
                                    arrow={false}
                                    trigger='click'>
                                    <div className='profile-header-action-left-item-child more-item'>
                                        More
                                        <i className='fa-solid fa-caret-down'></i>
                                    </div>
                                </Tippy>
                            </div>
                        </div>

                        <div className='profile-header-action-right'>
                            <i className='fa-regular fa-ellipsis'></i>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const MoreTipy = () => {
    const action = [
        { id: 1, name: 'Sport' },
        { id: 2, name: 'Music' },
        { id: 3, name: 'Films' },
        { id: 4, name: 'TV Programmer' },
        { id: 5, name: 'Books' },
        { id: 6, name: 'Apps and Games' },
        { id: 7, name: 'Question' },
        { id: 8, name: 'Reviews given' },
        { id: 9, name: 'Groups' },
        { id: 10, name: 'Manage Sections' },
    ];

    return (
        <div className={styles.wrapperMoreTippy}>
            {action.map((item) => {
                return (
                    <div key={item.id} className='tippy-item'>
                        {item.name}
                    </div>
                );
            })}
        </div>
    );
};
