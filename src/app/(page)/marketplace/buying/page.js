// import MarketBuying from '@/components/package/marketplace/buying';
import dynamic from 'next/dynamic';

const MarketBuying = dynamic(
    () => import('@/components/package/marketplace/buying'),
    {
        ssr: false,
    }
);

export default function Page() {
    return <MarketBuying />;
}
