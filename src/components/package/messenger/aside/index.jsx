'use client';

import Tippy from '@tippyjs/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import data from '@/components/data/data';
import styles from '../messenger.module.scss';

const AsideMessenger = () => {
    const pathname = usePathname();

    console.log(typeof messID);

    return (
        <aside className={styles.wrapperAsideMessenger}>
            <div className='container__left--header'>
                <span>Chats </span>

                <div className='action'>
                    <div className='action-item'>
                        <i className='fa-solid fa-ellipsis'></i>
                    </div>

                    <div className='action-item'>
                        <i className='fa-solid fa-video'></i>
                    </div>

                    <div className='action-item'>
                        <i className='fa-solid fa-pen-to-square'></i>
                    </div>
                </div>
            </div>

            <div className='search'>
                <i className='fa-solid fa-search'></i>
                <input type='text' placeholder='Search Messenger' />
            </div>

            <div className='mess-tab'>
                <div className='mess-tab-item active'>Inbox</div>
                <div className='mess-tab-item'>
                    Communities
                    <span className='mess-tab-item-count'></span>
                </div>
            </div>

            <div className='messenger'>
                {data.users
                    .filter((item) => item.id !== 1)
                    .map((item, index) => {
                        return (
                            <Link
                                href={`/messenger/${item.id}`}
                                key={index}
                                className={
                                    pathname === `/messenger/${item.id}`
                                        ? 'messenger__item messenger__item-active'
                                        : 'messenger__item'
                                }>
                                <div className='messenger__item--avatar'>
                                    <Image
                                        src={item.avatar}
                                        alt='image'
                                        width='0'
                                        height='0'
                                        sizes='100vw'
                                        fill={false}
                                    />
                                </div>
                                <div className='messenger__item--content'>
                                    <div className='info'>
                                        <div className='info__name'>
                                            {item.name}
                                        </div>
                                        <div className='info__mess'>
                                            {item.message}
                                        </div>
                                    </div>
                                </div>
                                <Tippy
                                    arrow={false}
                                    content={'hehe'}
                                    placement='bottom'
                                    interactive
                                    theme='light'
                                    trigger='click'>
                                    <div className='action'>
                                        <div className='action__btn'>
                                            <i className='fa-regular fa-ellipsis'></i>
                                        </div>
                                    </div>
                                </Tippy>
                            </Link>
                        );
                    })}
            </div>
        </aside>
    );
};

export default AsideMessenger;
