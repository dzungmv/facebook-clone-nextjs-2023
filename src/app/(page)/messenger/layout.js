import AsideMessenger from '@/components/package/messenger/aside';
import styles from '@/components/package/messenger/messenger.module.scss';

export default function DashboardLayout({ children }) {
    return (
        <main className={styles.wrapperMessenger}>
            <section className='mess-left'>
                <AsideMessenger />
            </section>
            <section className='mess-right'>{children}</section>
        </main>
    );
}
