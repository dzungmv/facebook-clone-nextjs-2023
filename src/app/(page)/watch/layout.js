import dynamic from 'next/dynamic';
// import WatchSidebar from '@/components/package/watch';
import styles from '@/components/package/watch/watch.module.scss';
import NavMobile from '@/components/package/watch/nav-mobile';

const WatchSidebar = dynamic(() => import('@/components/package/watch'), {
    ssr: false,
});

export default function DashboardLayout({ children }) {
    return (
        <main className={styles.wrapperWatchPage}>
            <aside className='page-left'>
                <WatchSidebar />
            </aside>

            <section className='nav-mobile'>
                <NavMobile />
            </section>

            <section className='page-right'>{children}</section>
        </main>
    );
}
