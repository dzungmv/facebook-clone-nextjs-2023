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
        <div className={styles.wrapperPersonalTooltip}>
            <div className='user-info'>
                <div className='user-info-item' onClick={handle.goToProfile}>
                    <div className='user-info-item-information'>
                        <div className='user-info-item-information-avatar'>
                            <Image
                                src={data.user.avatar}
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </div>
                        <div className='user-info-item-information-username'>
                            {data.user.name}
                        </div>
                    </div>
                    <div className='user-info-item-swpage'>
                        <i className='fa-light fa-arrow-rotate-left'></i>
                        <div className='user-info-item-swpage-image'>
                            <Image
                                src={data.user.page.page_avatar}
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </div>
                    </div>
                </div>

                <hr />

                <div className='user-info-item'>
                    <div className='user-info-item-left'>See all profile</div>
                    <div className='user-info-item-right'>
                        <span>11</span>
                    </div>
                </div>
            </div>

            <div className='tool'>
                <div className='tool-item'>
                    <div className='tool-item-icon'>
                        <i className='fa-solid fa-gear'></i>
                    </div>
                    <span>Setting</span>
                </div>
                <div className='tool-item'>
                    <div className='tool-item-icon'>
                        <i className='fa-solid fa-circle-question'></i>
                    </div>
                    <span>Help & support</span>
                </div>
                <div className='tool-item'>
                    <div className='tool-item-icon'>
                        <i className='fa-solid fa-moon'></i>
                    </div>
                    <span>Display and accessibility</span>
                </div>
                <div className='tool-item'>
                    <div className='tool-item-icon'>
                        <i className='fa-solid fa-message-exclamation'></i>
                    </div>
                    <span>Give feedback</span>
                </div>

                <div
                    className='tool-item'
                    onClick={() => router.push('/auth/login')}>
                    <div className='tool-item-icon'>
                        <i className='fa-solid fa-arrow-right-from-bracket'></i>
                    </div>
                    <span>Log Out</span>
                </div>
            </div>

            <div className='about-us'>
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
            </div>
            <div className='more'>
                <Link href=''>More</Link>
                &#9679;
                <span>Meta &copy; 2023</span>
            </div>
        </div>
    );
}
