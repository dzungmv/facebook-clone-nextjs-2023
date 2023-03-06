// import Discover from '@/components/package/pages/discover';

import dynamic from 'next/dynamic';

const Discover = dynamic(() => import('@/components/package/pages/discover'), {
    ssr: false,
});

export default function Page() {
    return (
        <>
            <Discover />
        </>
    );
}
