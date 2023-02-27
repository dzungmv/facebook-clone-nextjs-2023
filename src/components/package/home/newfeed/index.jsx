'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

import styles from '../home.module.scss';
import data from '@/components/data/data.json';
import Post from '@/components/common/post';

export default function Newfeed() {
    const storyContainerRef = useRef(null);
    const btnPrevRef = useRef(null);
    const btnNextRef = useRef(null);

    // const dispatch = useDispatch();

    // const modal = useSelector((state) => state.modals.modals.createPost);

    const handle = {
        scrollStory: () => {
            if (storyContainerRef.current.scrollLeft <= 0) {
                btnPrevRef.current.style.display = 'none';
            } else {
                btnPrevRef.current.style.display = 'flex';
            }

            if (
                storyContainerRef.current.scrollLeft >=
                Math.abs(
                    storyContainerRef.current.scrollWidth -
                        storyContainerRef.current.clientWidth
                )
            ) {
                btnNextRef.current.style.display = 'none';
            } else {
                btnNextRef.current.style.display = 'flex';
            }
        },
        btnScrollNextStory: () => {
            storyContainerRef.current?.scrollBy({
                top: 0,
                left: 500,
                behavior: 'smooth',
            });
        },
        btnScrollPrevStory: () => {
            storyContainerRef.current?.scrollBy({
                top: 0,
                left: -500,
                behavior: 'smooth',
            });
        },
    };

    // Scroll story
    if (storyContainerRef.current) {
        if (
            storyContainerRef.current.scrollWidth -
                storyContainerRef.current.clientWidth ===
            0
        ) {
            btnPrevRef.current.style.display = 'none';
            btnNextRef.current.style.display = 'none';
        }
    }
    if (storyContainerRef.current) {
        if (storyContainerRef.current.scrollLeft <= 0) {
            btnPrevRef.current.style.display = 'none';
        } else {
            btnPrevRef.current.style.display = 'flex';
        }
    }

    useEffect(() => {
        btnPrevRef.current.style.display = 'none';
    }, []);

    return (
        <>
            {/* {modal && (
                <Modal
                    title='Create post'
                    show={modal}
                    close={() => dispatch(setCreatePostModal(false))}
                    size='auto'>
                    {<CreatePostModal />}
                </Modal>
            )} */}
            <div className={styles.wrapperNewfeed}>
                <section className='story'>
                    <div
                        ref={storyContainerRef}
                        onScroll={handle.scrollStory}
                        className='story-container'>
                        <div className='story-item-user'>
                            <div className='story-item-user-header'>
                                <Image
                                    src={data.user.avatar}
                                    alt='image'
                                    width='0'
                                    height='0'
                                    fill={false}
                                    sizes='100vw'
                                />
                            </div>

                            <div className='story-item-user-content'>
                                <div className='story-item-user-content-add'>
                                    <div className='story-item-user-content-add-btn'>
                                        <i className='fa-regular fa-plus'></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {data.users.map((item) => {
                            return (
                                <div key={item.id} className='story-item '>
                                    <Image
                                        src={item.story.media}
                                        alt='image'
                                        width='0'
                                        height='0'
                                        fill={false}
                                        sizes='100vw'
                                    />
                                    <div className='story-item-avatar'>
                                        <Image
                                            src={item.avatar}
                                            alt='image'
                                            width='0'
                                            height='0'
                                            fill={false}
                                            sizes='100vw'
                                        />
                                    </div>
                                    <div className='story-item-username'>
                                        {item.name}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div
                        ref={btnNextRef}
                        className='story-btn btn-next'
                        onClick={handle.btnScrollNextStory}>
                        <i className='fa-solid fa-chevron-right'></i>
                    </div>
                    <div
                        ref={btnPrevRef}
                        className='story-btn btn-prev'
                        onClick={handle.btnScrollPrevStory}>
                        <i className='fa-solid fa-chevron-left'></i>
                    </div>
                </section>

                <section className='create-post'>
                    <div className='create-post-content'>
                        <div className='create-post-content-avatar'>
                            <Image
                                src={data.user.avatar}
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </div>
                        <div
                            className='create-post-content-input'
                            onClick={() => dispatch(setCreatePostModal(true))}>
                            <span className=''>
                                What's on your mind, Minh Dzung?
                            </span>
                        </div>
                    </div>

                    <div className='create-post-footer'>
                        <div className='create-post-footer-item'>
                            <div className='create-post-footer-item-icon'>
                                <Image
                                    src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/live-video.svg'
                                    alt='image'
                                    width='0'
                                    height='0'
                                    fill={false}
                                    sizes='100vw'
                                />
                            </div>
                            <div className='create-post-footer-item-name'>
                                Live videos
                            </div>
                        </div>
                        <div className='create-post-footer-item'>
                            <div className='create-post-footer-item-icon'>
                                <Image
                                    src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/photo-video.svg'
                                    alt='image'
                                    width='0'
                                    height='0'
                                    fill={false}
                                    sizes='100vw'
                                />
                            </div>
                            <div className='create-post-footer-item-name'>
                                Photo/video
                            </div>
                        </div>
                        <div className='create-post-footer-item'>
                            <div className='create-post-footer-item-icon'>
                                <Image
                                    src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/emoiji.svg'
                                    alt='image'
                                    width='0'
                                    height='0'
                                    fill={false}
                                    sizes='100vw'
                                />
                            </div>
                            <div className='create-post-footer-item-name'>
                                Feeling/activity
                            </div>
                        </div>
                    </div>
                </section>

                {<Post data={data} />}
            </div>
        </>
    );
}
