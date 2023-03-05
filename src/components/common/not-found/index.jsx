import { useRouter } from 'next/navigation';

import styles from './notfound.module.scss';

function ErrorPage() {
    const navigate = useRouter();

    const handleGotoNewsFeed = () => {
        navigate.push('/');
    };

    const handleBack = () => {
        navigate.push(-1);
    };

    return (
        <main className={styles.wrapperNotFound}>
            <section className='wrapper__container'>
                <div className='break__link'>
                    <i className='fa-solid fa-link-slash'></i>
                </div>

                <p className='des__1'>This page isn't available</p>
                <p>
                    The link may be broken, or the page may have been removed.
                </p>
                <p>
                    Check to see if the link you`re trying to open is correct.
                </p>

                <div className='back__btn'>
                    <button onClick={handleGotoNewsFeed}>
                        Go to News Feed
                    </button>
                </div>

                <div onClick={handleBack} className='back__link'>
                    Go back
                </div>
            </section>
        </main>
    );
}

export default ErrorPage;
