import styles from './home.module.scss';
import Morebar from './morebar';
import Newfeed from './newfeed';
import SideBar from './sidebar';

const HomePage = () => {
    return (
        <section className={styles.wrapperHome}>
            {' '}
            <div className='homepage-item-left'>
                <SideBar />
            </div>
            <div className='homepage-item-center'>
                <Newfeed />
            </div>
            <div className='homepage-item-right'>
                <Morebar />
            </div>
        </section>
    );
};

export default HomePage;
