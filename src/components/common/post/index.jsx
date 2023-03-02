import Image from 'next/image';
import Gallery from '../gallery';
import styles from './post.module.scss';

const Post = ({ avatarImg, username, caption, media, commentData }) => {
    return (
        <section className={styles.wrapperPost}>
            <div className='post-item box'>
                <div className='post-item-header'>
                    <div className='post-item-header-left'>
                        <div className='post-item-header-left-avatar'>
                            <Image
                                src={avatarImg ?? ''}
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </div>
                        <div className='post-item-header-left-info'>
                            <div className='post-item-header-left-info-name'>
                                {username ?? ''}
                            </div>
                            <div className='post-item-header-left-info-time'>
                                <div className='time'>1 d</div>
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

                <div className='post-item-caption'>{caption ?? ''}</div>

                {Array.isArray(media) ? (
                    <div className='post-item-media'>
                        <Gallery
                            media={media && media.length > 0 ? media : []}
                        />
                    </div>
                ) : (
                    <div className='media-video'>
                        <iframe
                            src={
                                media
                                // ''
                            }
                            width='476'
                            height='476'
                            scrolling='no'
                            frameBorder='0'
                            allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
                            allowFullScreen={true}>
                            Video
                        </iframe>
                    </div>
                )}

                <div className='post-item-count'>
                    <div className='post-item-count-left'>
                        <div className='post-item-count-left-icon'>
                            <div className='post-item-count-left-icon-item'>
                                <Image
                                    src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/liking.svg'
                                    alt='image'
                                    width='0'
                                    height='0'
                                    fill={false}
                                    sizes='100vw'
                                />
                            </div>

                            <div className='post-item-count-left-icon-item'>
                                <Image
                                    src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/love.svg'
                                    alt='image'
                                    width='0'
                                    height='0'
                                    fill={false}
                                    sizes='100vw'
                                />
                            </div>

                            <div className='post-item-count-left-icon-item'>
                                <Image
                                    src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/haha.svg'
                                    alt='image'
                                    width='0'
                                    height='0'
                                    fill={false}
                                    sizes='100vw'
                                />
                            </div>
                            <div className='post-item-count-left-icon-item'>
                                <Image
                                    src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/sad.svg'
                                    alt='image'
                                    width='0'
                                    height='0'
                                    fill={false}
                                    sizes='100vw'
                                />
                            </div>
                        </div>
                        <div className='post-item-count-left-num'>1.3k</div>
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
                            <Image
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/like.svg'
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </div>
                        <div className='post-item-react-item-name'>Like</div>
                    </div>
                    <div className='post-item-react-item'>
                        <div className='post-item-react-item-icon'>
                            <Image
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/comment.svg'
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </div>
                        <div className='post-item-react-item-name'>Comment</div>
                    </div>
                    <div className='post-item-react-item'>
                        <div className='post-item-react-item-icon'>
                            <Image
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/share.svg'
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </div>
                        <div className='post-item-react-item-name'>Share</div>
                    </div>
                </div>

                <div className='post-item-comment'>
                    <div className='post-item-comment-header'>
                        <div className='post-item-comment-header-item'>
                            <span>All comment</span>
                            <i className='fa-solid fa-caret-down'></i>
                        </div>
                    </div>

                    <div className='post-item-comment-write'>
                        <div className='post-item-comment-write-avatar'>
                            <Image
                                src={avatarImg}
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
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
                                        <Image
                                            src='icons/homepage-content/interact/like.svg'
                                            alt='image'
                                            width='0'
                                            height='0'
                                            fill={false}
                                            sizes='100vw'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='post-item-comment-des'>
                        {commentData &&
                            commentData.length > 0 &&
                            commentData.map((user) => {
                                user.comment && user.comment.length > 0
                                    ? user.comment.map((item, index) => {
                                          return (
                                              <div
                                                  key={item.post_id}
                                                  className='post-item-comment-des-item'>
                                                  <div className='post-item-comment-des-item-avatar'>
                                                      <Image
                                                          src={item.user_avatar}
                                                          alt='image'
                                                          width='0'
                                                          height='0'
                                                          fill={false}
                                                          sizes='100vw'
                                                      />
                                                  </div>
                                                  <div className='post-item-comment-des-item-content'>
                                                      <div className='post-item-comment-des-item-content-wrapper'>
                                                          <div className='post-item-comment-des-item-content-username'>
                                                              {item.user_name}
                                                          </div>
                                                          <div className='post-item-comment-des-item-content-text'>
                                                              {item.content}
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
                                      })
                                    : null;
                            })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Post;
