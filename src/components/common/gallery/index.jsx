// import { useSelector, useDispatch } from 'react-redux';

// import {
//     setClickedImg,
//     setCurrentIndex,
// } from '../../_redux/features/previewer';

// import ImageViewer from '../image_preview';

import Image from 'next/image';
import styles from './gallery.module.scss';

export default function Gallery({ media }) {
    // const dispatch = useDispatch();
    // const imgPreviewer = useSelector((state) => state.previewer.previewer);
    // const handleClick = (item, index) => {
    //     dispatch(setCurrentIndex(index));
    //     dispatch(setClickedImg(item));
    // };
    return (
        <>
            {/* {imgPreviewer.clickImg && <ImageViewer media={media} />} */}
            <div className={styles.wrapperGallery}>
                {media.map((data, index) => {
                    const count = media.length - 4;
                    if (media.length === 1) {
                        return (
                            <div
                                // onClick={() => handleClick(data, index)}
                                key={index}
                                className='image__1'>
                                <Image
                                    src={data}
                                    alt='image'
                                    width='0'
                                    height='0'
                                    fill={false}
                                    sizes='100vw'
                                />
                            </div>
                        );
                    } else if (media.length === 2) {
                        return (
                            <div
                                // onClick={() => handleClick(data, index)}
                                key={index}
                                className='image__2'>
                                <Image
                                    src={data}
                                    alt='image'
                                    width='0'
                                    height='0'
                                    fill={false}
                                    sizes='100vw'
                                />
                            </div>
                        );
                    } else if (media.length === 3) {
                        return (
                            <div key={index} className='image__3'>
                                <Image
                                    // onClick={() => handleClick(data, index)}
                                    src={data}
                                    alt='image'
                                    width='0'
                                    height='0'
                                    fill={false}
                                    sizes='100vw'
                                />
                            </div>
                        );
                    } else if (index < 3) {
                        return (
                            <Image
                                // onClick={() => handleClick(data, index)}
                                key={index}
                                src={data}
                                alt='image'
                                width='0'
                                height='0'
                                fill={false}
                                sizes='100vw'
                            />
                        );
                    } else if (index === 3) {
                        return (
                            <div
                                // onClick={() => handleClick(data, index)}
                                key={index}
                                className='image__more'
                                style={{
                                    backgroundImage: `${
                                        count > 0
                                            ? 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
                                            : 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))'
                                    } , url(${data})`,
                                }}>
                                <span className='image__count'>
                                    {count > 0 ? `+${count}` : ''}
                                </span>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </>
    );
}
