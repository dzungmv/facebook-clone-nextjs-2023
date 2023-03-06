// import ProfileHeader from '@/components/package/profile/header';

import dynamic from 'next/dynamic';

import styles from '@/components/package/profile/profile.module.scss';

const ProfileHeader = dynamic(
    () => import('@/components/package/profile/header'),
    {
        ssr: false,
    }
);

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
