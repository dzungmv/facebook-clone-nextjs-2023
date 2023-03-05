import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import styles from '../header.module.scss';

export default function PersonalTooltip({ data, isRef }) {
    const router = useRouter();

    const handle = {
        goToProfile: () => {
            isRef.current._tippy.hide();
            router.push(`/profile`);
        },
    };
    return (
        <section className={styles.wrapperPersonalTooltip}>
            <section className='user-info'>
                <Link className='user-info-item' href={'/profile'}>
                    <section className='user-info-item-information'>
                        <figure className='user-info-item-information-avatar'>
                            <Image
                                src={data.user.avatar}
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </figure>
                        <p className='user-info-item-information-username'>
                            {data.user.name}
                        </p>
                    </section>
                    <section className='user-info-item-swpage'>
                        <i className='fa-light fa-arrow-rotate-left'></i>
                        <figure className='user-info-item-swpage-image'>
                            <Image
                                src={data.user.page.page_avatar}
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </figure>
                    </section>
                </Link>

                <hr />

                <section className='user-info-item'>
                    <span className='user-info-item-left'>See all profile</span>
                    <div className='user-info-item-right'>
                        <span>11</span>
                    </div>
                </section>
            </section>

            <section className='tool'>
                <section className='tool-item'>
                    <div className='tool-item-icon'>
                        <i className='fa-solid fa-gear'></i>
                    </div>
                    <span>Setting</span>
                </section>
                <section className='tool-item'>
                    <div className='tool-item-icon'>
                        <i className='fa-solid fa-circle-question'></i>
                    </div>
                    <span>Help & support</span>
                </section>
                <section className='tool-item'>
                    <div className='tool-item-icon'>
                        <i className='fa-solid fa-moon'></i>
                    </div>
                    <span>Display and accessibility</span>
                </section>
                <section className='tool-item'>
                    <div className='tool-item-icon'>
                        <i className='fa-solid fa-message-exclamation'></i>
                    </div>
                    <span>Give feedback</span>
                </section>

                <section
                    className='tool-item'
                    onClick={() => router.push('/auth/login')}>
                    <div className='tool-item-icon'>
                        <i className='fa-solid fa-arrow-right-from-bracket'></i>
                    </div>
                    <span>Log Out</span>
                </section>
            </section>

            <section className='about-us'>
                <Link href=''>Privacy</Link>
                &#9679;
                <Link href=''>Terms</Link>
                &#9679;
                <Link href=''>Advertising </Link>
                &#9679;
                <Link href=''>Ad choices </Link>
                &#9679;
                <Link href=''>Cookies </Link>
                &#9679;
            </section>
            <section className='more'>
                <Link href=''>More</Link>
                &#9679;
                <span>Meta &copy; 2023</span>
            </section>
        </section>
    );
}
