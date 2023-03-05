import Image from 'next/image';
import styles from '../pages.module.scss';

const LikedPage = () => {
    return (
        <section className={styles.wrapperLikedPage}>
            <section className='changed-section box'>
                <header className='changed-section-header'>
                    <h3 className='changed-section-header-title'>
                        Changes to Pages
                    </h3>
                    <p className='changed-section-header-desc'>
                        These Pages have changed their name since you liked
                        them. When a Page makes these changes, that could mean
                        that it changes what it posts about. You can decide if
                        you want to stay connected to these Pages.
                    </p>
                </header>

                <section className='changed-section-content'>
                    <section className='changed-section-content-item'>
                        <section className='changed-section-content-item-wrapper'>
                            <section className='changed-section-content-item-info'>
                                <figure className='changed-section-content-item-info-img'>
                                    <Image
                                        src='https://jungjung261.blob.core.windows.net/nextjs-project/pages/page2/avatar.jpg'
                                        alt='text'
                                        width='0'
                                        height='0'
                                        fill={false}
                                        sizes='100vw'
                                    />
                                </figure>

                                <section className='changed-section-content-item-info-i'>
                                    <p className='changed-section-content-item-info-i-name'>
                                        Thanh Xuân.
                                    </p>
                                    <p className='changed-section-content-item-info-i-auth'>
                                        Author
                                    </p>
                                </section>
                            </section>
                            <div className='changed-section-content-item-action'>
                                <i className='fa-solid fa-ellipsis'></i>
                            </div>
                        </section>

                        <div className='changed-section-content-item-footer'>
                            <button>
                                <i className='fa-brands fa-facebook-messenger'></i>{' '}
                                Send Message
                            </button>
                        </div>
                    </section>

                    <section className='changed-section-content-item'>
                        <section className='changed-section-content-item-wrapper'>
                            <section className='changed-section-content-item-info'>
                                <figure className='changed-section-content-item-info-img'>
                                    <Image
                                        src='https://jungjung261.blob.core.windows.net/nextjs-project/pages/page2/avatar.jpg'
                                        alt='text'
                                        width='0'
                                        height='0'
                                        fill={false}
                                        sizes='100vw'
                                    />
                                </figure>

                                <section className='changed-section-content-item-info-i'>
                                    <p className='changed-section-content-item-info-i-name'>
                                        Thanh Xuân.
                                    </p>
                                    <p className='changed-section-content-item-info-i-auth'>
                                        Author
                                    </p>
                                </section>
                            </section>
                            <div className='changed-section-content-item-action'>
                                <i className='fa-solid fa-ellipsis'></i>
                            </div>
                        </section>

                        <div className='changed-section-content-item-footer'>
                            <button>
                                <i className='fa-brands fa-facebook-messenger'></i>{' '}
                                Send Message
                            </button>
                        </div>
                    </section>
                </section>
            </section>

            <section className='changed-section box all-page'>
                <header className='changed-section-header'>
                    <h3 className='changed-section-header-title'>
                        All Pages you like or follow (1)
                    </h3>
                </header>

                <section className='changed-section-content'>
                    <section className='changed-section-content-item all-page-item'>
                        <section className='changed-section-content-item-wrapper'>
                            <section className='changed-section-content-item-info'>
                                <figure className='changed-section-content-item-info-img'>
                                    <Image
                                        src='https://jungjung261.blob.core.windows.net/nextjs-project/pages/page2/avatar.jpg'
                                        alt='text'
                                        width='0'
                                        height='0'
                                        fill={false}
                                        sizes='100vw'
                                    />
                                </figure>

                                <section className='changed-section-content-item-info-i'>
                                    <p className='changed-section-content-item-info-i-name'>
                                        Thanh Xuân.
                                    </p>
                                    <p className='changed-section-content-item-info-i-auth'>
                                        Author
                                    </p>
                                </section>
                            </section>
                            <div className='changed-section-content-item-action'>
                                <i className='fa-solid fa-ellipsis'></i>
                            </div>
                        </section>

                        <div className='changed-section-content-item-footer'>
                            <button>
                                <i className='fa-brands fa-facebook-messenger'></i>{' '}
                                Send Message
                            </button>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default LikedPage;
