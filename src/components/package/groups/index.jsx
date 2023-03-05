import Post from '@/components/common/post';
import Posting from '@/components/common/posting';
import data from '@/components/data/data';
import styles from './groups.module.scss';

const GroupDiscussion = () => {
    return (
        <section className={styles.wrapperGroupDiscussion}>
            <section className='section-left'>
                <Posting data={data.user} />

                {data.users.map((item) => {
                    return (
                        <Post
                            key={item.id}
                            avatarImg={item.avatar}
                            username={item.name}
                            caption={item.post.caption}
                            media={item.post.media}
                            commentData={item.comment}
                        />
                    );
                })}
            </section>
            <section className='section-right'>
                <section className='section-right-about box'>
                    <h4>About</h4>
                    <p className='about-des'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s
                    </p>

                    <section className='about-privacy-item'>
                        <i className='fa-regular fa-earth-americas'></i>
                        <section className='privacy'>
                            <h4>Public</h4>
                            <p>
                                Anyone can see who&apos;s in the group and what
                                they post.
                            </p>
                        </section>
                    </section>

                    <section className='about-privacy-item'>
                        <i className='fa-regular fa-earth-americas'></i>
                        <section className='privacy'>
                            <h4>Visible</h4>
                            <p>Anyone can find this group.</p>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default GroupDiscussion;
