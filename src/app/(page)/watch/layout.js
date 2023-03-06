import dynamic from 'next/dynamic';
// import WatchSidebar from '@/components/package/watch';
import styles from '@/components/package/watch/watch.module.scss';

const WatchSidebar = dynamic(() => import('@/components/package/watch'), {
    ssr: false,
});

export default function DashboardLayout({ children }) {
    return (
        <main className={styles.wrapperWatchPage}>
            <aside className='page-left'>
                <WatchSidebar />
            </aside>

            <section className='page-right'>{children}</section>
        </main>
    );
}
