// import Photos from '@/components/package/profile/photo';

import dynamic from 'next/dynamic';

const Photos = dynamic(() => import('@/components/package/profile/photo'), {
    ssr: false,
});

export default function Page() {
    return <Photos />;
}
