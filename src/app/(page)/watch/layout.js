import WatchSidebar from '@/components/package/watch';
import styles from '@/components/package/watch/watch.module.scss';

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
