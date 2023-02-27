'use client';
import { useRef, useCallback, useEffect } from 'react';

import styles from './Modal.module.scss';

function Modal({ title, children, show, close, size, notCloseOutside }) {
    const modalRef = useRef();

    const keyProp = useCallback(
        (e) => {
            if (e.key === 'Escape' && show) {
                close(false);
            }
        },
        [close, show]
    );

    // forward prop close outside modal

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            close(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', keyProp);
        return () => document.removeEventListener('keydown', keyProp);
    });

    //option to close modal outside

    // Disable scroll when modal is open
    useEffect(() => {
        if (show) {
            document.body.style.overflowY = 'hidden';
        }
        return () => (document.body.style.overflowY = 'unset');
    }, [show]);

    return (
        <>
            {show ? (
                <div
                    className={styles.wrapperModal}
                    ref={modalRef}
                    onClick={!notCloseOutside ? closeModal : null}>
                    <div
                        // set width modal auto or 100%
                        className={`container ${size}`}
                        // style={{ width: `${setWidthModal}` }}
                    >
                        <div className='heading'>
                            <div className='title'>{title}</div>
                            <span
                                className='close'
                                onClick={() => close(false)}>
                                <li className='fa-light fa-xmark'></li>
                            </span>
                        </div>
                        <div className='content'>{children}</div>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Modal;
