import dynamic from 'next/dynamic';
// import AsideMessenger from '@/components/package/messenger/aside';
import styles from '@/components/package/messenger/messenger.module.scss';

const AsideMessenger = dynamic(
    () => import('@/components/package/messenger/aside'),
    {
        ssr: false,
    }
);

export default function DashboardLayout({ children }) {
    return (
        <main className={styles.wrapperMessenger}>
            <aside className='mess-left'>
                <AsideMessenger />
            </aside>
            <section className='mess-right'>{children}</section>
        </main>
    );
}
