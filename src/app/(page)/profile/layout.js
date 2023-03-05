import ProfileHeader from '@/components/package/profile/header';
import styles from '@/components/package/profile/profile.module.scss';

export default function DashboardLayout({ children }) {
    return (
        <main>
            <ProfileHeader />
            <section className={styles.wrapperProfileContent}>
                {children}
            </section>
        </main>
    );
}
