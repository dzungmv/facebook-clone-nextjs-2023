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
                                    'https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-1/95764350_1574199796082961_1452891731480543232_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=F4UuhZP2ou0AX9LaIFD&tn=O9fqTXlykRD1rd_w&_nc_ht=scontent.fhan14-1.fna&oh=00_AfB-3tuWSY4h6cdoVn8Rj0L3x6XRJ3fHZz03b4J9d4z8Cw&oe=6426781C'
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
                                    'https://scontent.xx.fbcdn.net/v/t39.30808-1/334469240_718060076472535_8115844507716948002_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=8ksWklUh4j0AX94Kx_n&tn=Q-ET-AMdIdKtxJO_&_nc_ht=scontent.fhan3-3.fna&oh=00_AfDrs2-QyJjBomkmqX1163mygK1PmIIO5iTqJNSE7IdrCQ&oe=64038AB0&_nc_fr=fhan3c03'
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
                    avatarImg='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/239356530_545873263421587_6435644173639923242_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=109&ccb=1-7&_nc_sid=c6021c&_nc_ohc=YVp2V7MmdW0AX_1qxXm&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfB47d5AVLlmco1UmrqoXGWfo1oShXjE33jUaFINmP5elQ&oe=6403C71F'
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
