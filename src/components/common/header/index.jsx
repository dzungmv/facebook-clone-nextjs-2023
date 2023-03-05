'use client';
import Link from 'next/link';
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import data from '@/components/data/data';
import side_bar_ui from '@/components/package/home/sidebar/data.ui';
import header_ui from './data.ui';
import styles from './header.module.scss';
import PersonalTooltip from './tooltip';
import Search from './search';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <header className={styles.wrapperHeader}>
                <section className='header-left'>
                    <Link href={'/'} className='header-left-logo'>
                        <Image
                            src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/branch.svg'
                            alt='facebook'
                            width='0'
                            height='0'
                            fill={false}
                            sizes='100vw'
                            priority={true}
                        />
                    </Link>
                    <Search />
                </section>
                <section className='header-center'>
                    {header_ui.map((item) => {
                        return (
                            <Tippy
                                key={item.id}
                                content={item.name}
                                theme='light'
                                delay={[500, 0]}>
                                <Link
                                    href={item.url}
                                    className={
                                        item.url === pathname
                                            ? 'header-center-item tab-active'
                                            : 'header-center-item'
                                    }>
                                    <figure className='header-center-item-child'>
                                        <Image
                                            className='header-center-item-child-main_img'
                                            src={item.icon}
                                            alt='header-icon'
                                            width='0'
                                            height='0'
                                            fill={false}
                                            sizes='100vw'
                                            priority={true}
                                        />
                                        <Image
                                            className='header-center-item-child-active_img'
                                            src={item.icon_active}
                                            alt=''
                                            width='0'
                                            height='0'
                                            fill={false}
                                            sizes='100vw'
                                            priority={true}
                                        />
                                    </figure>
                                    <div className='line-active'></div>
                                </Link>
                            </Tippy>
                        );
                    })}
                </section>
                <section className='header-right'>
                    <Tippy
                        content='Menu'
                        placement='bottom'
                        arrow={false}
                        delay={[500, 0]}
                        theme='light'>
                        <div className='header-right-item'>
                            <i className='fa-solid fa-grid'></i>
                        </div>
                    </Tippy>

                    <Tippy
                        content='Messenger'
                        placement='bottom'
                        arrow={false}
                        delay={[500, 0]}
                        theme='light'>
                        <Link
                            href={'/messenger'}
                            className='header-right-item'
                            style={
                                pathname.includes('messenger')
                                    ? { display: 'none' }
                                    : {}
                            }>
                            <i className='fa-brands fa-facebook-messenger'></i>
                        </Link>
                    </Tippy>

                    <Tippy
                        content='Notifications'
                        placement='bottom'
                        theme='light'
                        delay={[500, 0]}
                        arrow={false}>
                        <div className='header-right-item'>
                            <i className='fa-solid fa-bell'></i>
                        </div>
                    </Tippy>

                    <button
                        className='header-right-item toggle-bar'
                        onClick={() => setToggle((prev) => !prev)}>
                        <i className='fa-solid fa-bars'></i>
                    </button>

                    <Tippy
                        content='Account'
                        placement='bottom'
                        theme='light'
                        delay={[500, 0]}
                        arrow={false}>
                        <Tippy
                            // ref={tooltipRef}
                            className='header-tippy'
                            content={<PersonalTooltip data={data} />}
                            placement='bottom-start'
                            interactive={true}
                            animation='scale'
                            arrow={false}
                            trigger='click'>
                            <figure className='header-right-item header-right-avatar'>
                                <Image
                                    src={data.user.avatar}
                                    alt='avatar'
                                    width='0'
                                    height='0'
                                    fill={false}
                                    sizes='100vw'
                                />
                            </figure>
                        </Tippy>
                    </Tippy>
                </section>
            </header>

            {toggle && (
                <section className={styles.wrapperHeaderMenu}>
                    <header className='menu-heading'>
                        <h1 className='menu-heading-branch'>Facebook</h1>

                        <div
                            className='menu-heading-close'
                            onClick={() => setToggle(false)}>
                            <li className='fa-light fa-xmark'></li>
                        </div>
                    </header>

                    <section className='menu-content'>
                        <h3 className='menu-content-title'>Menu</h3>
                        {header_ui.map((item) => (
                            <Link
                                key={item.id}
                                href={item.url}
                                className={
                                    item.url === pathname
                                        ? 'menu-content-item menu-content-item-active'
                                        : 'menu-content-item'
                                }>
                                <figure className='menu-content-item-label'>
                                    <Image
                                        src={item.icon_active}
                                        alt='icon'
                                        width='0'
                                        height='0'
                                        fill={false}
                                        sizes='100vw'
                                        priority={true}
                                    />
                                </figure>
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </section>

                    <section className='menu-sidebar'>
                        <h3 className='menu-content-title'>Shortcuts</h3>
                        {side_bar_ui.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={
                                    item.href === pathname
                                        ? 'menu-content-item menu-content-item-active'
                                        : 'menu-content-item'
                                }>
                                <figure className='menu-content-item-label'>
                                    <Image
                                        src={item.icon}
                                        alt='icon'
                                        width='0'
                                        height='0'
                                        fill={false}
                                        sizes='100vw'
                                        priority={true}
                                    />
                                </figure>
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </section>
                </section>
            )}
        </>
    );
};
export default Header;
