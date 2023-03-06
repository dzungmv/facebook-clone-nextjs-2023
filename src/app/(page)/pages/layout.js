'use client';

import dynamic from 'next/dynamic';

// import PagesSidebar from '@/components/package/pages';
import styles from '@/components/package/pages/pages.module.scss';

const PagesSidebar = dynamic(() => import('@/components/package/pages'), {
    ssr: false,
});

export default function DashboardLayout({ children }) {
    return (
        <main className={styles.wrapperPages}>
            <aside className='page-left'>
                <PagesSidebar />
            </aside>

            <section className='page-right'>{children}</section>
        </main>
    );
}
