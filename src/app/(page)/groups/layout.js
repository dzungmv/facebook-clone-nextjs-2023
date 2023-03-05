import GroupHeader from '@/components/package/groups/header';
import styles from '@/components/package/groups/groups.module.scss';

export default function DashboardLayout({ children }) {
    return (
        <main className={styles.wrapperGroupsPage}>
            <GroupHeader />
            <section className='group-content'>
                <section className='group-content-container'>
                    {children}
                </section>
            </section>
        </main>
    );
}
