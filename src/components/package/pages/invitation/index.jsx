import Image from 'next/image';
import styles from '../pages.module.scss';

const Invitation = ({ data }) => {
    return (
        <div className={styles.wrapperInvitation}>
            <div className='header'>
                <div className='header-title'>Invitations</div>
                <div className='header-sub__title'>
                    Page and profile invitations
                </div>
            </div>

            <div className='content'>
                <div className='content-item box'>
                    <div className='content-item-header'>
                        <div className='content-item-header-avatar'>
                            <Image
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/pages/page3/avatar.jpg'
                                alt='text'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </div>

                        <div className='content-item-header-right'>
                            <div className='content-item-header-right-name'>
                                Chị là lý do em say chị.
                            </div>
                            <div className='content-item-header-right-cata'>
                                Creater
                            </div>
                            <div className='content-item-header-inviter'>
                                <div className='content-item-header-inviter-avatar'>
                                    {' '}
                                    <Image
                                        src={data.users[1].avatar}
                                        alt='text'
                                        width='0'
                                        height='0'
                                        fill={false}
                                        sizes='100vw'
                                    />
                                </div>
                                <div className='content-item-header-inviter-name'>
                                    {data.users[1].name}{' '}
                                    <span>invited you to like this Page.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='content-item-action'>
                        <div className='content-item-action-btn'>
                            <button>
                                <i className='fa-solid fa-thumbs-up'></i> Accept
                            </button>
                        </div>

                        <div className='content-item-action-more'>
                            <div className='content-item-action-more-btn'>
                                {' '}
                                <i className='fa-solid fa-ellipsis-h'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invitation;
