import styles from '@/components/package/marketplace/market.module.scss';
import NavMobile from '@/components/package/marketplace/nav-mobile';
import dynamic from 'next/dynamic';
// import AsideBar from '@/components/package/marketplace/sidebar';

const AsideBar = dynamic(
    () => import('@/components/package/marketplace/sidebar'),
    {
        ssr: false,
    }
);

export default function DashboardLayout({ children }) {
    return (
        <main className={styles.wrapperMarketPlace}>
            <aside className='page-left'>
                <AsideBar />
            </aside>

            <section className='nav-mobile'>
                <NavMobile />
            </section>
            <section className='page-right'>{children}</section>
        </main>
    );
}
