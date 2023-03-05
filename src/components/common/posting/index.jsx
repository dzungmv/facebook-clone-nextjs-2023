import Image from 'next/image';
import styles from './posting.module.scss';

const Posting = ({ data }) => {
    return (
        <section className={styles.wrapperPosting}>
            <section className='create-post-content'>
                <figure className='create-post-content-avatar'>
                    <Image
                        src={data?.avatar}
                        alt='image'
                        width='0'
                        height='0'
                        fill={false}
                        sizes='100vw'
                    />
                </figure>
                <div className='create-post-content-input'>
                    <span className=''>
                        What&apos;s on your mind, Minh Dzung?
                    </span>
                </div>
            </section>

            <section className='create-post-footer'>
                <section className='create-post-footer-item'>
                    <figure className='create-post-footer-item-icon'>
                        <Image
                            src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/live-video.svg'
                            alt='image'
                            width='0'
                            height='0'
                            fill={false}
                            sizes='100vw'
                        />
                    </figure>
                    <span className='create-post-footer-item-name'>
                        Live videos
                    </span>
                </section>
                <section className='create-post-footer-item'>
                    <figure className='create-post-footer-item-icon'>
                        <Image
                            src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/photo-video.svg'
                            alt='image'
                            width='0'
                            height='0'
                            fill={false}
                            sizes='100vw'
                        />
                    </figure>
                    <span className='create-post-footer-item-name'>
                        Photo/video
                    </span>
                </section>
                <section className='create-post-footer-item'>
                    <figure className='create-post-footer-item-icon'>
                        <Image
                            src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/emoiji.svg'
                            alt='image'
                            width='0'
                            height='0'
                            fill={false}
                            sizes='100vw'
                        />
                    </figure>
                    <span className='create-post-footer-item-name'>
                        Feeling/activity
                    </span>
                </section>
            </section>
        </section>
    );
};

export default Posting;
