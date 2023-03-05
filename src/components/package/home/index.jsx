import styles from './home.module.scss';
import Morebar from './morebar';
import Newfeed from './newfeed';
import SideBar from './sidebar';

const HomePage = () => {
    return (
        <main className={styles.wrapperHome}>
            {' '}
            <aside className='homepage-item-left'>
                <SideBar />
            </aside>
            <section className='homepage-item-center'>
                <Newfeed />
            </section>
            <aside className='homepage-item-right'>
                <Morebar />
            </aside>
        </main>
    );
};

export default HomePage;
