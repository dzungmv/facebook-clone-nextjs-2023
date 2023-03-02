import ProfileHeader from '@/components/package/profile/header';

export default function DashboardLayout({ children }) {
    return (
        <>
            <ProfileHeader />
            <div
                style={{
                    maxWidth: '1100px;',
                    margin: '0 auto',
                }}>
                {children}
            </div>
        </>
    );
}
