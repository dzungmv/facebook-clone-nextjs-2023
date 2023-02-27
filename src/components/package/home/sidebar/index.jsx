import styles from '../home.module.scss';

import data from '@/components/data/data.json';
import sidebarui from './data.ui';
import Image from 'next/image';

export default function SideBar() {
    return (
        <aside className={styles.wrapperSidebar}>
            <div className='container'>
                <div className='sidebar-item'>
                    <div className='sidebar-item-icon'>
                        <Image
                            src={data.user.avatar}
                            alt='User avatar'
                            width='0'
                            height='0'
                            fill={false}
                            sizes='100vw'
                        />
                    </div>
                    <div className='sidebar-item-name'>Minh Dzung</div>
                </div>

                {sidebarui.map((item) => (
                    <div key={item.id} className='sidebar-item'>
                        <div className='sidebar-item-icon'>
                            <Image
                                src={item.icon}
                                alt='Sidebar icon'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        </div>
                        <div className='sidebar-item-name'>{item.name}</div>
                    </div>
                ))}
            </div>
        </aside>
    );
}
