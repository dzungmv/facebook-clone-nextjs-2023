// import Friends from '@/components/package/profile/friends';

import dynamic from 'next/dynamic';

const Friends = dynamic(() => import('@/components/package/profile/friends'), {
    ssr: false,
});

export default function Page() {
    return <Friends />;
}
