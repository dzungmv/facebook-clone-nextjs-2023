import Image from 'next/image';
import styles from '../pages.module.scss';

const LikedPage = () => {
    return (
        <div className={styles.wrapperLikedPage}>
            <section className='changed-section box'>
                <div className='changed-section-header'>
                    <div className='changed-section-header-title'>
                        Changes to Pages
                    </div>
                    <div className='changed-section-header-desc'>
                        These Pages have changed their name since you liked
                        them. When a Page makes these changes, that could mean
                        that it changes what it posts about. You can decide if
                        you want to stay connected to these Pages.
                    </div>
                </div>

                <div className='changed-section-content'>
                    <div className='changed-section-content-item'>
                        <div className='changed-section-content-item-wrapper'>
                            <div className='changed-section-content-item-info'>
                                <div className='changed-section-content-item-info-img'>
                                    <Image
                                        src='https://jungjung261.blob.core.windows.net/nextjs-project/pages/page2/avatar.jpg'
                                        alt='text'
                                        width='0'
                                        height='0'
                                        fill={false}
                                        sizes='100vw'
                                    />
                                </div>

                                <div className='changed-section-content-item-info-i'>
                                    <div className='changed-section-content-item-info-i-name'>
                                        Thanh Xuân.
                                    </div>
                                    <div className='changed-section-content-item-info-i-auth'>
                                        Author
                                    </div>
                                </div>
                            </div>
                            <div className='changed-section-content-item-action'>
                                <i className='fa-solid fa-ellipsis'></i>
                            </div>
                        </div>

                        <div className='changed-section-content-item-footer'>
                            <button>
                                <i className='fa-brands fa-facebook-messenger'></i>{' '}
                                Send Message
                            </button>
                        </div>
                    </div>

                    <div className='changed-section-content-item'>
                        <div className='changed-section-content-item-wrapper'>
                            <div className='changed-section-content-item-info'>
                                <div className='changed-section-content-item-info-img'>
                                    <Image
                                        src='https://jungjung261.blob.core.windows.net/nextjs-project/pages/page2/avatar.jpg'
                                        alt='text'
                                        width='0'
                                        height='0'
                                        fill={false}
                                        sizes='100vw'
                                    />
                                </div>

                                <div className='changed-section-content-item-info-i'>
                                    <div className='changed-section-content-item-info-i-name'>
                                        Thanh Xuân.
                                    </div>
                                    <div className='changed-section-content-item-info-i-auth'>
                                        Author
                                    </div>
                                </div>
                            </div>
                            <div className='changed-section-content-item-action'>
                                <i className='fa-solid fa-ellipsis'></i>
                            </div>
                        </div>

                        <div className='changed-section-content-item-footer'>
                            <button>
                                <i className='fa-brands fa-facebook-messenger'></i>{' '}
                                Send Message
                            </button>
                        </div>
                    </div>

                    <div className='changed-section-content-item'>
                        <div className='changed-section-content-item-wrapper'>
                            <div className='changed-section-content-item-info'>
                                <div className='changed-section-content-item-info-img'>
                                    <Image
                                        src='https://jungjung261.blob.core.windows.net/nextjs-project/pages/page2/avatar.jpg'
                                        alt='text'
                                        width='0'
                                        height='0'
                                        fill={false}
                                        sizes='100vw'
                                    />
                                </div>

                                <div className='changed-section-content-item-info-i'>
                                    <div className='changed-section-content-item-info-i-name'>
                                        Thanh Xuân.
                                    </div>
                                    <div className='changed-section-content-item-info-i-auth'>
                                        Author
                                    </div>
                                </div>
                            </div>
                            <div className='changed-section-content-item-action'>
                                <i className='fa-solid fa-ellipsis'></i>
                            </div>
                        </div>

                        <div className='changed-section-content-item-footer'>
                            <button>
                                <i className='fa-brands fa-facebook-messenger'></i>{' '}
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='changed-section box all-page'>
                <div className='changed-section-header'>
                    <div className='changed-section-header-title'>
                        All Pages you like or follow (1)
                    </div>
                </div>

                <div className='changed-section-content'>
                    <div className='changed-section-content-item all-page-item'>
                        <div className='changed-section-content-item-wrapper'>
                            <div className='changed-section-content-item-info'>
                                <div className='changed-section-content-item-info-img'>
                                    <Image
                                        src='https://jungjung261.blob.core.windows.net/nextjs-project/pages/page2/avatar.jpg'
                                        alt='text'
                                        width='0'
                                        height='0'
                                        fill={false}
                                        sizes='100vw'
                                    />
                                </div>

                                <div className='changed-section-content-item-info-i'>
                                    <div className='changed-section-content-item-info-i-name'>
                                        Thanh Xuân.
                                    </div>
                                    <div className='changed-section-content-item-info-i-auth'>
                                        Author
                                    </div>
                                </div>
                            </div>
                            <div className='changed-section-content-item-action'>
                                <i className='fa-solid fa-ellipsis'></i>
                            </div>
                        </div>

                        <div className='changed-section-content-item-footer'>
                            <button>
                                <i className='fa-brands fa-facebook-messenger'></i>{' '}
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LikedPage;
