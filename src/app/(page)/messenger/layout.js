'use client';
import { useEffect, useState } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';

import AsideMessenger from '@/components/package/messenger/aside';
import styles from '@/components/package/messenger/messenger.module.scss';

export default function DashboardLayout({ children }) {
    const [messID, setMessID] = useState();

    useEffect(() => {
        setMessID(Number(children.props.childProp.segment[1]));

        return () => {
            setMessID(null);
        };
    }, [Number(children.props.childProp.segment[1])]);

    return (
        <main className={styles.wrapperMessenger}>
            <section className='mess-left'>
                <AsideMessenger messID={messID} />
            </section>
            <section className='mess-right'>{children}</section>
        </main>
    );
}
