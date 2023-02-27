import Header from '@/components/common/header';

export default function DashboardLayout({ children }) {
    return (
        <>
            <Header />
            <div>{children}</div>
        </>
    );
}
