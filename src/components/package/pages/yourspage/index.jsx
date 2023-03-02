/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styles from '../pages.module.scss';

const YourPagesAndProfile = ({ data }) => {
    return (
        <div className={styles.wrapperYourpages}>
            <div className='your-page-header'>
                <span>Pages your manage</span>
                <span>Updated Pages</span>
                <span>
                    These Pages were updated to the new Pages experience. You
                    can switch into them to manage them.
                </span>
            </div>

            <div className='your-page-content'>
                <div className='your-page-content-left box'>
                    <div className='your-page-content-left-item'>
                        <div className='your-page-content-left-item-header'>
                            <div className='your-page-content-left-item-header-img'>
                                <Image
                                    src={data.user.page.page_avatar}
                                    alt='text'
                                    width='0'
                                    height='0'
                                    fill={false}
                                    sizes='100vw'
                                />
                            </div>
                            <div className='your-page-content-left-item-header-info'>
                                <div className='name'>
                                    {data.user.page.name}
                                </div>
                                <div className='action'>
                                    <div className='action-item'>
                                        <div className='action-item-icon'>
                                            <i className='fa-light fa-bell'></i>
                                        </div>
                                        <div className='action-item-text'>
                                            Notifications
                                        </div>
                                    </div>
                                    <div className='action-item'>
                                        <div className='action-item-icon'>
                                            <i className='fa-light fa-messages'></i>
                                        </div>
                                        <div className='action-item-text'>
                                            Messages
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='your-page-content-left-item-action'>
                            <div className='main-action'>
                                <div className='main-action-item'>
                                    <button>
                                        <i className='fa-light fa-pen-to-square'></i>
                                        Create post
                                    </button>
                                </div>

                                <div className='main-action-item'>
                                    <button className='promote-btn'>
                                        <i className='fa-duotone fa-bullhorn'></i>
                                        Promote
                                    </button>
                                </div>
                            </div>

                            <div className='sub-action'>
                                <div className='sub-action-item'>
                                    <i className='fa-solid fa-ellipsis'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='your-page-content-right '>
                    <div className='your-page-content-right-section box'>
                        <div className='your-page-content-right-section-header'>
                            <div className='your-page-content-right-section-header-title'>
                                Unpublished Pages
                            </div>
                            <div className='your-page-content-right-section-header-info'>
                                <i className='fa-solid fa-circle-info'></i>
                            </div>
                        </div>

                        <div className='your-page-content-right-section-desc'>
                            Publish these classic Pages to make them visible
                            again to the public.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourPagesAndProfile;
