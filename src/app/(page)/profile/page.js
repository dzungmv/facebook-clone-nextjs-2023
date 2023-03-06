import dynamic from 'next/dynamic';

// import ProfilePost from '@/components/package/profile/post';
const ProfilePost = dynamic(() => import('@/components/package/profile/post'), {
    ssr: false,
});

export default function Page() {
    return <ProfilePost />;
}
