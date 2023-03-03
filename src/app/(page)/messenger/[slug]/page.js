'use client';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setMessID } from '@/components/_redux/features/messenger/messIDSlice';

import data from '@/components/data/data';
import Chat from '@/components/package/messenger/chat';

export default function Page({ params }) {
    const dispatch = useDispatch();

    const [messData, setMessData] = useState([]);

    useEffect(() => {
        dispatch(setMessID(params.slug));
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
