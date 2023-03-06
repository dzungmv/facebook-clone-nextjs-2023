// import GroupDiscussion from '@/components/package/groups';

import dynamic from 'next/dynamic';

const GroupDiscussion = dynamic(() => import('@/components/package/groups'), {
    ssr: false,
});

export default function Page() {
    return (
        <>
            <GroupDiscussion />
        </>
    );
}
