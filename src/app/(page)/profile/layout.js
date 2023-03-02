import ProfileHeader from '@/components/package/profile/header';

export default function DashboardLayout({ children }) {
    return (
        <>
            <ProfileHeader />
            <>{children}</>
        </>
    );
}
