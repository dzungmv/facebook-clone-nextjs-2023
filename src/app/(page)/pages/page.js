// import YourPagesAndProfile from '@/components/package/pages/yourspage';
import dynamic from 'next/dynamic';

const YourPagesAndProfile = dynamic(
    () => import('@/components/package/pages/yourspage'),
    {
        ssr: false,
    }
);

export default function Page() {
    return (
        <>
            <YourPagesAndProfile />
        </>
    );
}
