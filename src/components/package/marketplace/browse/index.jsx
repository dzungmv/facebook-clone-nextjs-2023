import Image from 'next/image';
import styles from '../market.module.scss';

const items = [
    {
        id: 1,
        title: 'Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: 'https://jungjung261.blob.core.windows.net/nextjs-project/market/item1.jpg',
        price: '$10.00',
        address: 'Ho Chi Minh City, Vietnam',
    },
    {
        id: 2,
        title: 'Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: 'https://jungjung261.blob.core.windows.net/nextjs-project/market/item2.jpg',
        price: '$30.00',
        address: 'Ha Noi, Vietnam',
    },
    {
        id: 3,
        title: 'Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: 'https://jungjung261.blob.core.windows.net/nextjs-project/market/item3.jpg',
        price: '$20.00',
        address: 'Da Nang, Vietnam',
    },
    {
        id: 4,
        title: 'Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: 'https://jungjung261.blob.core.windows.net/nextjs-project/market/item4.jpg',
        price: '$40.00',
        address: 'Ho Chi Minh City, Vietnam',
    },
    {
        id: 5,
        title: 'Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: 'https://jungjung261.blob.core.windows.net/nextjs-project/market/item5.jpg',
        price: '$50.00',
        address: 'Dong Nai, Vietnam',
    },
];
const MarketBrowsePage = () => {
    return (
        <section className={styles.wrapperBrowseAll}>
            <header className='browse-heading'>
                <h2 className='browse-heading-title'>Today pick</h2>
                <address className='browse-heading-address'>
                    <i className='fa-solid fa-location-dot'></i>
                    <span>Viet Nam</span>
                </address>
            </header>

            <section className='browse-content'>
                {items.map((item) => {
                    return (
                        <article key={item.id} className='browse-content-item'>
                            <figure className='browse-content-img'>
                                <Image
                                    src={item.img}
                                    alt='produce'
                                    width='0'
                                    height='0'
                                    sizes='100vw'
                                    fill={false}
                                />
                            </figure>
                            <p className='browse-content-price'>{item.price}</p>
                            <p className='browse-content-desc'>
                                {item.description}
                            </p>
                            <address className='browse-content-address'>
                                {item.address}
                            </address>
                        </article>
                    );
                })}
            </section>
        </section>
    );
};

export default MarketBrowsePage;
