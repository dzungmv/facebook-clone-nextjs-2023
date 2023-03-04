import styles from '@/components/package/marketplace/market.module.scss';
import AsideBar from '@/components/package/marketplace/sidebar';

export default function DashboardLayout({ children }) {
    return (
        <main className={styles.wrapperMarketPlace}>
            <aside className='page-left'>
                <AsideBar />
            </aside>
            <section className='page-right'>{children}</section>
        </main>
    );
}
