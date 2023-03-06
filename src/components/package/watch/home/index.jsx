'use client';

import Post from '@/components/common/post';
import Image from 'next/image';
import styles from '../watch.module.scss';

const WatchHome = () => {
    return (
        <div className={styles.wrapperWatchHome}>
            <div className='story'>
                <div className='story-header'>New videos for you • 2</div>
                <div className='story-content'>
                    <div className='story-content-item'>
                        <div className='story-content-item-image'>
                            <Image
                                src={
                                    'https://jungjung261.blob.core.windows.net/nextjs-project/user/ocu.png'
                                }
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </div>

                        <div className='story-content-item-info'>
                            <div className='info-title'>
                                New videos from Ổ Cú and others.
                            </div>
                            <div className='info-time'>• about an hour ago</div>
                        </div>
                    </div>

                    <div className='story-content-item'>
                        <div className='story-content-item-image'>
                            <Image
                                src={
                                    'https://jungjung261.blob.core.windows.net/nextjs-project/user/vtv.jpeg'
                                }
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </div>

                        <div className='story-content-item-info'>
                            <div className='info-title'>
                                From VTV24 and others.
                            </div>
                            <div className='info-time'>• 11h ago</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='content'>
                <Post
                    avatarImg='https://jungjung261.blob.core.windows.net/nextjs-project/user/inthemood.jpeg'
                    username='In The Mood VN'
                    caption='Trưởng thành hơn, tôi dần tạo cho mình một ý niệm, rằng yêu nghĩa là ko bao giờ hối hận. Yêu ai, tôi cũng yêu bằng cả trái tim mình, không tính toán, ko so đo thiệt hơn, được mất.'
                    media='https://www.youtube.com/embed/4stzqTzSDs0?autoplay=1'
                    commentData
                />
            </div>
        </div>
    );
};

export default WatchHome;
