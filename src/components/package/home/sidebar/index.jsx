import styles from '../home.module.scss';

import data from '@/components/data/data.json';
import sidebarui from './data.ui';
import Image from 'next/image';

export default function SideBar() {
    return (
        <section className={styles.wrapperSidebar}>
            <section className='container'>
                <section className='sidebar-item'>
                    <figure className='sidebar-item-icon'>
                        <Image
                            src={data.user.avatar}
                            alt='User avatar'
                            width='0'
                            height='0'
                            fill={false}
                            sizes='100vw'
                        />
                    </figure>
                    <div className='sidebar-item-name'>Minh Dzung</div>
                </section>

                {sidebarui.map((item) => (
                    <section key={item.id} className='sidebar-item'>
                        <figure className='sidebar-item-icon'>
                            <Image
                                src={item.icon}
                                alt='Sidebar icon'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </figure>
                        <span className='sidebar-item-name'>{item.name}</span>
                    </section>
                ))}
            </section>
        </section>
    );
}
