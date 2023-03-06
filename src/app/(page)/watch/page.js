import dynamic from 'next/dynamic';

// import WatchHome from '@/components/package/watch/home';

const WatchHome = dynamic(() => import('@/components/package/watch/home'), {
    ssr: false,
});

export default function Page() {
    return (
        <>
            <WatchHome />
        </>
    );
}
