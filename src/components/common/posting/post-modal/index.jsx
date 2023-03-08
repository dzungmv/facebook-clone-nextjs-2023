import styles from '../posting.module.scss';
import Image from 'next/image';

import data from '@/components/data/data';

const CreatePostModal = () => {
    return (
        <section className={styles.wrapperModalCreatePost}>
            <section className='create-post-header'>
                <figure className='create-post-header-avatar'>
                    <Image
                        src={data.user.avatar}
                        alt='avatar'
                        width='0'
                        height='0'
                        sizes='100vw'
                        fill={false}
                    />
                </figure>
                <section className='create-post-header-info'>
                    <p className='create-post-header-info-name'>
                        {data.user.name}
                    </p>
                    <section className='create-post-header-info-audience'>
                        <div className='create-post-header-info-audience-icon'>
                            <i className='fa-solid fa-earth-americas'></i>
                        </div>
                        <div className='create-post-header-info-audience-text'>
                            Public
                        </div>
                        <div>
                            <i className='fa-solid fa-caret-down'></i>
                        </div>
                    </section>
                </section>
            </section>

            <form className='create-post-input'>
                <textarea
                    placeholder={`What on your mind, ${data.user.name}?`}
                    onInput={(e) => {
                        //   make height of textarea auto
                        e.target.style.height = 'auto';
                        e.target.style.height = e.target.scrollHeight + 'px';
                    }}
                />
            </form>

            <section className='create-post-footer'>
                <p className='create-post-footer-title'>Add to your post</p>
                <section className='create-post-footer-action'>
                    <div className='create-post-footer-action-item'>
                        <figure className='create-post-footer-action-item-icon'>
                            <img
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/photo-video.svg'
                                alt=''
                            />
                        </figure>
                    </div>

                    <div className='create-post-footer-action-item'>
                        <figure className='create-post-footer-action-item-icon'>
                            <img
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/tag.svg'
                                alt=''
                            />
                        </figure>
                    </div>

                    <div className='create-post-footer-action-item'>
                        <figure className='create-post-footer-action-item-icon'>
                            <img
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/emoiji.svg'
                                alt=''
                            />
                        </figure>
                    </div>

                    <div className='create-post-footer-action-item'>
                        <figure className='create-post-footer-action-item-icon'>
                            <img
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/location.svg'
                                alt=''
                            />
                        </figure>
                    </div>

                    <div className='create-post-footer-action-item'>
                        <figure className='create-post-footer-action-item-icon'>
                            <img
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/life_event.svg'
                                alt=''
                            />
                        </figure>
                    </div>

                    <div className='create-post-footer-action-item'>
                        <div className='create-post-footer-action-item-icon'>
                            <i className='fa-solid fa-ellipsis'></i>
                        </div>
                    </div>
                </section>
            </section>

            <form className='create-post-btn'>
                <button>Post</button>
            </form>
        </section>
    );
};

export default CreatePostModal;
