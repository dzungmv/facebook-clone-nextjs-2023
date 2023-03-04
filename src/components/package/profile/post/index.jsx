import styles from '../profile.module.scss';

import data from '@/components/data/data';
import Link from 'next/link';
import Post from '@/components/common/post';
import Image from 'next/image';

export default function ProfilePost() {
    // const dispatch = useDispatch();
    // const createPostModal = useSelector(
    //     (state) => state.modals.modals.createPost
    // );

    return (
        <>
            {/* {createPostModal && (
                <Modal
                    title={'Create post'}
                    show={createPostModal}
                    close={() => dispatch(setCreatePostModal(false))}
                    size='auto'>
                    <CreatePostModal />
                </Modal>
            )} */}
            <div className={styles.wrapperPost}>
                <div className='post-left'>
                    <div className='post-left-intro box'>
                        <div className='box-title'>Intro</div>
                        <div className='post-left-intro-bio'>
                            <span className='post-left-intro-bio-content'>
                                ✈️
                            </span>
                            <div className='post-left-intro-bio-edit'>
                                <button>Edit bio</button>
                            </div>
                        </div>
                        <div className='post-left-intro-detail'>
                            <div className='post-left-intro-detail-item'>
                                <div className='post-left-intro-detail-item-icon'>
                                    <i className='fa-solid fa-heart'></i>
                                </div>
                                <div className='post-left-intro-detail-item-name'>
                                    Single
                                </div>
                            </div>
                            <div className='post-left-intro-detail-item'>
                                <div className='post-left-intro-detail-item-icon'>
                                    <i className='fa-brands fa-github'></i>
                                </div>
                                <div className='post-left-intro-detail-item-name'>
                                    <Link href=''>jungjung261</Link>
                                </div>
                            </div>
                            <div className='post-left-intro-detail-item'>
                                <div className='post-left-intro-detail-item-icon'>
                                    <i className='fa-brands fa-linkedin'></i>
                                </div>
                                <div className='post-left-intro-detail-item-name'>
                                    <Link href=''>jungjung261</Link>
                                </div>
                            </div>
                            <div className='post-left-intro-detail-item'>
                                <div className='post-left-intro-detail-item-icon'>
                                    <i className='fa-brands fa-tiktok'></i>
                                </div>
                                <div className='post-left-intro-detail-item-name'>
                                    <Link href=''>jungjung261</Link>
                                </div>
                            </div>

                            <div className='post-left-intro-detail-edit'>
                                <button>Edit details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='post-right'>
                    <div className='post-right-create_post box'>
                        <div className='post-right-create_post-content'>
                            <div className='post-right-create_post-content-avatar'>
                                <Image
                                    src={data.user.avatar}
                                    alt='image'
                                    width='0'
                                    height='0'
                                    sizes='100vw'
                                    fill={false}
                                />
                            </div>
                            <div className='post-right-create_post-content-input'>
                                <span className=''>
                                    What's on your mind, Minh Dzung?
                                </span>
                            </div>
                        </div>

                        <div className='post-right-create_post-footer'>
                            <div className='post-right-create_post-footer-item'>
                                <div className='post-right-create_post-footer-item-icon'>
                                    <Image
                                        src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/live-video.svg'
                                        alt='image'
                                        width='0'
                                        height='0'
                                        sizes='100vw'
                                        fill={false}
                                    />
                                </div>
                                <div className='post-right-create_post-footer-item-name'>
                                    Live videos
                                </div>
                            </div>
                            <div className='post-right-create_post-footer-item'>
                                <div className='post-right-create_post-footer-item-icon'>
                                    <Image
                                        src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/photo-video.svg'
                                        alt='image'
                                        width='0'
                                        height='0'
                                        sizes='100vw'
                                        fill={false}
                                    />
                                </div>
                                <div className='post-right-create_post-footer-item-name'>
                                    Photo/video
                                </div>
                            </div>
                            <div className='post-right-create_post-footer-item'>
                                <div className='post-right-create_post-footer-item-icon'>
                                    <Image
                                        src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/emoiji.svg'
                                        alt='image'
                                        width='0'
                                        height='0'
                                        sizes='100vw'
                                        fill={false}
                                    />
                                </div>
                                <div className='post-right-create_post-footer-item-name'>
                                    Feeling/activity
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='post-right-manage box'>
                        <div className='box-title'>Posts</div>
                        <div className='post-right-manage-content'>
                            <div className='post-right-manage-content-item'>
                                <div className='post-right-manage-content-icon'>
                                    <i className='fa-solid fa-sliders-simple'></i>
                                </div>
                                <div className='post-right-manage-content-name'>
                                    Filters
                                </div>
                            </div>
                            <div className='post-right-manage-content-item'>
                                <div className='post-right-manage-content-icon'>
                                    <i className='fa-solid fa-gear'></i>
                                </div>
                                <div className='post-right-manage-content-name'>
                                    Manage posts
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className='post'>
                        {
                            <Post
                                avatarImg={data.user.avatar}
                                username={data.user.name}
                                caption={data.user.post.caption}
                                media={data.user.post.media}
                                commentData={data.user.comment}
                            />
                        }
                    </section>
                </div>
            </div>
        </>
    );
}
