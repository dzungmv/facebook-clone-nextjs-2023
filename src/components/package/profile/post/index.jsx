import styles from '../profile.module.scss';

import data from '@/components/data/data';
import Link from 'next/link';
import Post from '@/components/common/post';
import Image from 'next/image';
import Posting from '@/components/common/posting';

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
            <section className={styles.wrapperPost}>
                <section className='post-left'>
                    <section className='post-left-intro box'>
                        <h4 className='box-title'>Intro</h4>
                        <section className='post-left-intro-bio'>
                            <span className='post-left-intro-bio-content'>
                                ✈️
                            </span>
                            <div className='post-left-intro-bio-edit'>
                                <button>Edit bio</button>
                            </div>
                        </section>
                        <section className='post-left-intro-detail'>
                            <section className='post-left-intro-detail-item'>
                                <div className='post-left-intro-detail-item-icon'>
                                    <i className='fa-solid fa-heart'></i>
                                </div>
                                <span className='post-left-intro-detail-item-name'>
                                    Single
                                </span>
                            </section>
                            <section className='post-left-intro-detail-item'>
                                <div className='post-left-intro-detail-item-icon'>
                                    <i className='fa-brands fa-github'></i>
                                </div>
                                <div className='post-left-intro-detail-item-name'>
                                    <Link href=''>jungjung261</Link>
                                </div>
                            </section>
                            <section className='post-left-intro-detail-item'>
                                <div className='post-left-intro-detail-item-icon'>
                                    <i className='fa-brands fa-linkedin'></i>
                                </div>
                                <div className='post-left-intro-detail-item-name'>
                                    <Link href=''>jungjung261</Link>
                                </div>
                            </section>
                            <section className='post-left-intro-detail-item'>
                                <div className='post-left-intro-detail-item-icon'>
                                    <i className='fa-brands fa-tiktok'></i>
                                </div>
                                <div className='post-left-intro-detail-item-name'>
                                    <Link href=''>jungjung261</Link>
                                </div>
                            </section>

                            <div className='post-left-intro-detail-edit'>
                                <button>Edit details</button>
                            </div>
                        </section>
                    </section>
                </section>
                <section className='post-right'>
                    <Posting data={data.user} />

                    <section className='post-right-manage box'>
                        <h4 className='box-title'>Posts</h4>
                        <section className='post-right-manage-content'>
                            <section className='post-right-manage-content-item'>
                                <div className='post-right-manage-content-icon'>
                                    <i className='fa-solid fa-sliders-simple'></i>
                                </div>
                                <span className='post-right-manage-content-name'>
                                    Filters
                                </span>
                            </section>
                            <section className='post-right-manage-content-item'>
                                <div className='post-right-manage-content-icon'>
                                    <i className='fa-solid fa-gear'></i>
                                </div>
                                <span className='post-right-manage-content-name'>
                                    Manage posts
                                </span>
                            </section>
                        </section>
                    </section>

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
                </section>
            </section>
        </>
    );
}
