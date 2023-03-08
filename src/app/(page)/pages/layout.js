'use client';

import dynamic from 'next/dynamic';

// import PagesSidebar from '@/components/package/pages';
import styles from '@/components/package/pages/pages.module.scss';

const SidebarMobile = dynamic(
    () => import('@/components/package/pages/sidebar-mobile'),
    {
        ssr: false,
    }
);

const PagesSidebar = dynamic(() => import('@/components/package/pages'), {
    ssr: false,
});

export default function DashboardLayout({ children }) {
    return (
        <main className={styles.wrapperPages}>
            <aside className='page-left'>
                <PagesSidebar />
            </aside>

            <section className='sidebar-mobile'>
                <SidebarMobile />
            </section>

            <section className='page-right'>{children}</section>
        </main>
    );
}
