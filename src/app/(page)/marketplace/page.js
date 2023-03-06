// import MarketBrowsePage from '@/components/package/marketplace/browse';

import dynamic from 'next/dynamic';

const MarketBrowsePage = dynamic(
    () => import('@/components/package/marketplace/browse'),
    {
        ssr: false,
    }
);

export default function Page() {
    return (
        <>
            <MarketBrowsePage />
        </>
    );
}
