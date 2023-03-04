'use client';
import { useEffect, useState } from 'react';

import data from '@/components/data/data';
import Chat from '@/components/package/messenger/chat';

export default function Page({ params }) {
    const [messData, setMessData] = useState([]);

    useEffect(() => {
        const mess = data.users.find((user) => {
            return user.id === Number(params.slug);
        });
        setMessData(mess);

        return () => {
            setMessData([]);
        };
    }, [params.slug]);
    return (
        <>
            <Chat data={messData} />
        </>
    );
}
