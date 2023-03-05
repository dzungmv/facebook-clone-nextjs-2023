import Image from 'next/image';
import Gallery from '../gallery';
import styles from './post.module.scss';

const Post = ({ avatarImg, username, caption, media, commentData }) => {
    return (
        <article className={styles.wrapperPost}>
            <section className='post-item box'>
                <section className='post-item-header'>
                    <section className='post-item-header-left'>
                        <figure className='post-item-header-left-avatar'>
                            <Image
                                src={avatarImg ?? ''}
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </figure>
                        <section className='post-item-header-left-info'>
                            <div className='post-item-header-left-info-name'>
                                {username ?? ''}
                            </div>
                            <section className='post-item-header-left-info-time'>
                                <span className='time'>1 d</span>
                                <div className='privacy'>
                                    <i className='fa-solid fa-earth-americas'></i>
                                </div>
                            </section>
                        </section>
                    </section>

                    <div className='post-item-header-right'>
                        <i className='fa-solid fa-ellipsis-h'></i>
                    </div>
                </section>

                <p className='post-item-caption'>{caption ?? ''}</p>

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

                <section className='post-item-count'>
                    <section className='post-item-count-left'>
                        <div className='post-item-count-left-icon'>
                            <figure className='post-item-count-left-icon-item'>
                                <Image
                                    src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/liking.svg'
                                    alt='image'
                                    width='0'
                                    height='0'
                                    fill={false}
                                    sizes='100vw'
                                />
                            </figure>

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
                        <span className='post-item-count-left-num'>1.3k</span>
                    </section>

                    <section className='post-item-count-right'>
                        <p className='post-item-count-right-comments'>
                            131 comments
                        </p>
                        <p className='post-item-count-right-shares'>
                            220 shares
                        </p>
                    </section>
                </section>

                <section className='post-item-react'>
                    <section className='post-item-react-item'>
                        <figure className='post-item-react-item-icon'>
                            <Image
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/like.svg'
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </figure>
                        <p className='post-item-react-item-name'>Like</p>
                    </section>
                    <section className='post-item-react-item'>
                        <figure className='post-item-react-item-icon'>
                            <Image
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/comment.svg'
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </figure>
                        <p className='post-item-react-item-name'>Comment</p>
                    </section>
                    <section className='post-item-react-item'>
                        <figure className='post-item-react-item-icon'>
                            <Image
                                src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/share.svg'
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </figure>
                        <div className='post-item-react-item-name'>Share</div>
                    </section>
                </section>

                <section className='post-item-comment'>
                    <div className='post-item-comment-header'>
                        <section className='post-item-comment-header-item'>
                            <span>All comment</span>
                            <i className='fa-solid fa-caret-down'></i>
                        </section>
                    </div>

                    <section className='post-item-comment-write'>
                        <figure className='post-item-comment-write-avatar'>
                            <Image
                                src={avatarImg}
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </figure>
                        <section className='post-item-comment-write-action'>
                            <div className='post-item-comment-write-action-input'>
                                <input
                                    type='text'
                                    placeholder='Write a comment...'
                                />
                            </div>
                            <section className='post-item-comment-write-action-icon'>
                                <section className='post-item-comment-write-action-icon-item'>
                                    <figure className='post-item-comment-write-action-icon-img'>
                                        <Image
                                            src='https://jungjung261.blob.core.windows.net/nextjs-project/system-ui/react/like.svg'
                                            alt='image'
                                            width='0'
                                            height='0'
                                            fill={false}
                                            sizes='100vw'
                                        />
                                    </figure>
                                </section>
                            </section>
                        </section>
                    </section>

                    <section className='post-item-comment-des'>
                        {commentData &&
                            commentData.length > 0 &&
                            commentData.map((user) => {
                                user.comment && user.comment.length > 0
                                    ? user.comment.map((item, index) => {
                                          return (
                                              <section
                                                  key={item.post_id}
                                                  className='post-item-comment-des-item'>
                                                  <figure className='post-item-comment-des-item-avatar'>
                                                      <Image
                                                          src={item.user_avatar}
                                                          alt='image'
                                                          width='0'
                                                          height='0'
                                                          fill={false}
                                                          sizes='100vw'
                                                      />
                                                  </figure>
                                                  <section className='post-item-comment-des-item-content'>
                                                      <section className='post-item-comment-des-item-content-wrapper'>
                                                          <h4 className='post-item-comment-des-item-content-username'>
                                                              {item.user_name}
                                                          </h4>
                                                          <p className='post-item-comment-des-item-content-text'>
                                                              {item.content}
                                                          </p>
                                                      </section>

                                                      <section className='post-item-comment-des-item-content-action'>
                                                          <div className='post-item-comment-des-item-content-action-item'>
                                                              <i className='far fa-ellipsis-h'></i>
                                                          </div>
                                                      </section>
                                                  </section>
                                              </section>
                                          );
                                      })
                                    : null;
                            })}
                    </section>
                </section>
            </section>
        </article>
    );
};

export default Post;
