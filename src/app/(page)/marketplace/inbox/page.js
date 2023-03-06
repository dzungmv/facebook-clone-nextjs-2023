// import MarketNotifications from '@/components/package/marketplace/notifications';

import dynamic from 'next/dynamic';

const MarketNotifications = dynamic(
    () => import('@/components/package/marketplace/notifications'),
    {
        ssr: false,
    }
);

export default function Page() {
    return <MarketNotifications />;
}
