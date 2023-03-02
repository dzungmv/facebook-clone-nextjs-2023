import styles from '../profile.module.scss';

// import CreatePostModal from '../newfeed/post.modal';
import Gallery from '@/components/common/gallery';

import data from '@/components/data/data';
import Link from 'next/link';

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
                                <img
                                    src={data.user.avatar}
                                    alt=''
                                    loading='lazy'
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
                                    <img
                                        src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/live-video.svg'
                                        alt=''
                                    />
                                </div>
                                <div className='post-right-create_post-footer-item-name'>
                                    Live videos
                                </div>
                            </div>
                            <div className='post-right-create_post-footer-item'>
                                <div className='post-right-create_post-footer-item-icon'>
                                    <img
                                        src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/photo-video.svg'
                                        alt=''
                                    />
                                </div>
                                <div className='post-right-create_post-footer-item-name'>
                                    Photo/video
                                </div>
                            </div>
                            <div className='post-right-create_post-footer-item'>
                                <div className='post-right-create_post-footer-item-icon'>
                                    <img
                                        src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/create-post/emoiji.svg'
                                        alt=''
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
                        {data.users.map((item) => {
                            return item.post && item.post.length > 0
                                ? item.post.map((post, index) => {
                                      return (
                                          <div
                                              key={index}
                                              className='post-item'>
                                              <div className='post-item-header'>
                                                  <div className='post-item-header-left'>
                                                      <div className='post-item-header-left-avatar'>
                                                          <img
                                                              src={item.avatar}
                                                              alt=''
                                                          />
                                                      </div>
                                                      <div className='post-item-header-left-info'>
                                                          <div className='post-item-header-left-info-name'>
                                                              {item.name}
                                                          </div>
                                                          <div className='post-item-header-left-info-time'>
                                                              <div className='time'>
                                                                  1 d
                                                              </div>
                                                              <div className='privacy'>
                                                                  <i className='fa-solid fa-earth-americas'></i>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div className='post-item-header-right'>
                                                      <i className='fa-solid fa-ellipsis-h'></i>
                                                  </div>
                                              </div>

                                              <div className='post-item-caption'>
                                                  {post.caption}
                                              </div>

                                              <div className='post-item-media'>
                                                  <Gallery media={post.media} />
                                              </div>

                                              <div className='post-item-count'>
                                                  <div className='post-item-count-left'>
                                                      <div className='post-item-count-left-icon'>
                                                          <div className='post-item-count-left-icon-item'>
                                                              <img
                                                                  src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/liking.svg'
                                                                  alt=''
                                                              />
                                                          </div>

                                                          <div className='post-item-count-left-icon-item'>
                                                              <img
                                                                  src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/love.svg'
                                                                  alt=''
                                                              />
                                                          </div>

                                                          <div className='post-item-count-left-icon-item'>
                                                              <img
                                                                  src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/haha.svg'
                                                                  alt=''
                                                              />
                                                          </div>
                                                          <div className='post-item-count-left-icon-item'>
                                                              <img
                                                                  src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/sad.svg'
                                                                  alt=''
                                                              />
                                                          </div>
                                                      </div>
                                                      <div className='post-item-count-left-num'>
                                                          1.3k
                                                      </div>
                                                  </div>

                                                  <div className='post-item-count-right'>
                                                      <div className='post-item-count-right-comments'>
                                                          131 comments
                                                      </div>
                                                      <div className='post-item-count-right-shares'>
                                                          220 shares
                                                      </div>
                                                  </div>
                                              </div>

                                              <div className='post-item-react'>
                                                  <div className='post-item-react-item'>
                                                      <div className='post-item-react-item-icon'>
                                                          <img
                                                              src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/like.svg'
                                                              alt=''
                                                          />
                                                      </div>
                                                      <div className='post-item-react-item-name'>
                                                          Like
                                                      </div>
                                                  </div>
                                                  <div className='post-item-react-item'>
                                                      <div className='post-item-react-item-icon'>
                                                          <img
                                                              src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/comment.svg'
                                                              alt=''
                                                          />
                                                      </div>
                                                      <div className='post-item-react-item-name'>
                                                          Comment
                                                      </div>
                                                  </div>
                                                  <div className='post-item-react-item'>
                                                      <div className='post-item-react-item-icon'>
                                                          <img
                                                              src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/share.svg'
                                                              alt=''
                                                          />
                                                      </div>
                                                      <div className='post-item-react-item-name'>
                                                          Share
                                                      </div>
                                                  </div>
                                              </div>

                                              <div className='post-item-comment'>
                                                  <div className='post-item-comment-header'>
                                                      <div className='post-item-comment-header-item'>
                                                          <span>
                                                              All comment
                                                          </span>
                                                          <i className='fa-solid fa-caret-down'></i>
                                                      </div>
                                                  </div>

                                                  <div className='post-item-comment-write'>
                                                      <div className='post-item-comment-write-avatar'>
                                                          <img
                                                              src={
                                                                  data.user
                                                                      .avatar
                                                              }
                                                              alt=''
                                                          />
                                                      </div>
                                                      <div className='post-item-comment-write-action'>
                                                          <div className='post-item-comment-write-action-input'>
                                                              <input
                                                                  type='text'
                                                                  placeholder='Write a comment...'
                                                              />
                                                          </div>
                                                          <div className='post-item-comment-write-action-icon'>
                                                              <div className='post-item-comment-write-action-icon-item'>
                                                                  <div className='post-item-comment-write-action-icon-img'>
                                                                      <img
                                                                          src='icons/homepage-content/interact/like.svg'
                                                                          alt=''
                                                                      />
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div className='post-item-comment-des'>
                                                      {data.users.map(
                                                          (user) => {
                                                              user.comment &&
                                                              user.comment
                                                                  .length > 0
                                                                  ? user.comment.map(
                                                                        (
                                                                            item,
                                                                            index
                                                                        ) => {
                                                                            return (
                                                                                <div
                                                                                    key={
                                                                                        item.post_id
                                                                                    }
                                                                                    className='post-item-comment-des-item'>
                                                                                    <div className='post-item-comment-des-item-avatar'>
                                                                                        <img
                                                                                            src={
                                                                                                item.user_avatar
                                                                                            }
                                                                                            alt=''
                                                                                        />
                                                                                    </div>
                                                                                    <div className='post-item-comment-des-item-content'>
                                                                                        <div className='post-item-comment-des-item-content-wrapper'>
                                                                                            <div className='post-item-comment-des-item-content-username'>
                                                                                                {
                                                                                                    item.user_name
                                                                                                }
                                                                                            </div>
                                                                                            <div className='post-item-comment-des-item-content-text'>
                                                                                                {
                                                                                                    item.content
                                                                                                }
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className='post-item-comment-des-item-content-action'>
                                                                                            <div className='post-item-comment-des-item-content-action-item'>
                                                                                                <i className='far fa-ellipsis-h'></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            );
                                                                        }
                                                                    )
                                                                  : null;
                                                          }
                                                      )}
                                                  </div>
                                              </div>
                                          </div>
                                      );
                                  })
                                : null;
                        })}
                    </section>
                </div>
            </div>
        </>
    );
}
