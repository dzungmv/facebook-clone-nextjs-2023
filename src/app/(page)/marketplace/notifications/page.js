// import MarketInbox from '@/components/package/marketplace/inbox';

import dynamic from 'next/dynamic';

const MarketInbox = dynamic(
    () => import('@/components/package/marketplace/inbox'),
    {
        ssr: false,
    }
);

export default function Page() {
    return <MarketInbox />;
}
