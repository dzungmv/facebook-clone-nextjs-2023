// import MarketSelling from '@/components/package/marketplace/selling';

import dynamic from 'next/dynamic';

const MarketSelling = dynamic(
    () => import('@/components/package/marketplace/selling'),
    {
        ssr: false,
    }
);

export default function Page() {
    return <MarketSelling />;
}
