'use client';

import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import { postModal } from '@/components/_redux/features/modal/modalSlice';
import Modal from '../modal';

import styles from './posting.module.scss';
import CreatePostModal from './post-modal';

const Posting = ({ data }) => {
    const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal.modalType.createPostModal);

    console.log('modal', modal);

    return (
        <>
            {modal && (
                <Modal
                    title='Create post'
                    show={modal}
                    close={() => dispatch(postModal(false))}>
                    <CreatePostModal />
                </Modal>
            )}
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
                    <div
                        className='create-post-content-input'
                        onClick={() => dispatch(postModal(true))}>
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
        </>
    );
};

export default Posting;
