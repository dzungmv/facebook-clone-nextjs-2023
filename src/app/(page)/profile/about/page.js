// import About from '@/components/package/profile/about';

import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/package/profile/about'), {
    ssr: false,
});

export default function Page() {
    return <About />;
}
