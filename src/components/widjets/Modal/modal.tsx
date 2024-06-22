import {Portal} from "../Portal/portal.tsx";
import {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import classNames from "classnames";
import cls from './modal.module.scss'


interface ModalProps {
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    isLazy?: boolean;
}


const Modal = (props: ModalProps) => {
    const {isOpen, children, isLazy, onClose} = props


    const ANIMATION_DELAY = 300;
    const [isClosing, setIsClosing] = useState(false);
    const [isMouted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>()


    const closeHandler = useCallback(() => {
            if (onClose) {
                setIsClosing(true);
                timerRef.current = setTimeout(() =>
                    {
                        onClose();
                        setIsClosing(false)
                    }
                    , ANIMATION_DELAY);
            }

    },[onClose])

    const onContentClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    }

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if( event.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if(isOpen) {
            setIsMounted(true);
        }
    },[isOpen])

    useEffect(() => {
        if(isOpen){
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown)
            clearTimeout(timerRef.current)
        }
    }, [isOpen]);

    const modalClasses = classNames({

        [cls.Modal]: true,
        [cls.opened]: isOpen,
        [cls.close]: isClosing,
    })

    if(isLazy && !isMouted)
        return null


    return (
        <Portal>
            <div className={modalClasses}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>

            </div>
        </Portal>
    );
};

export default Modal;