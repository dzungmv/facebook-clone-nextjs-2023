// import LikedPage from '@/components/package/pages/likepage';
import dynamic from 'next/dynamic';

const LikedPage = dynamic(() => import('@/components/package/pages/likepage'), {
    ssr: false,
});

export default function Page() {
    return (
        <>
            <LikedPage />
        </>
    );
}
