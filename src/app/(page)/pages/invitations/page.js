// import Invitation from '@/components/package/pages/invitation';
import dynamic from 'next/dynamic';

const Invitation = dynamic(
    () => import('@/components/package/pages/invitation'),
    {
        ssr: false,
    }
);

export default function Page() {
    return (
        <>
            <Invitation />
        </>
    );
}
