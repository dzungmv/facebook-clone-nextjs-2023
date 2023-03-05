import Image from 'next/image';
import styles from '../pages.module.scss';

const Discover = () => {
    return (
        <section className={styles.wrapperDiscover}>
            <h3 className='header'>Suggested for you</h3>

            <section className='content'>
                <section className='content-card'>
                    <figure className='content-card-img'>
                        <Image
                            src='https://jungjung261.blob.core.windows.net/nextjs-project/pages/page1/cover.jpg'
                            alt='text'
                            width='0'
                            height='0'
                            fill={false}
                            sizes='100vw'
                        />
                    </figure>
                    <section className='content-card-info'>
                        <section className='content-card-info-container'>
                            <figure className='content-card-info-left'>
                                <Image
                                    src='https://jungjung261.blob.core.windows.net/nextjs-project/pages/page1/avatar.jpg'
                                    alt='text'
                                    width='0'
                                    height='0'
                                    fill={false}
                                    sizes='100vw'
                                />
                            </figure>
                            <section className='content-card-info-right'>
                                <h4 className='content-card-info-right-name'>
                                    Tip AI
                                </h4>
                                <p className='content-card-info-right-cate'>
                                    Scientist
                                </p>
                                <span className='content-card-info-right-count'>
                                    72 peoples like this Page
                                </span>
                            </section>
                        </section>

                        <div className='content-card-action'>
                            <button>
                                <i className='fa-solid fa-thumbs-up'></i> Like
                            </button>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Discover;
