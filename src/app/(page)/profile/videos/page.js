// import Videos from '@/components/package/profile/videos';

import dynamic from 'next/dynamic';

const Videos = dynamic(() => import('@/components/package/profile/videos'), {
    ssr: false,
});

export default function Page() {
    return <Videos />;
}
