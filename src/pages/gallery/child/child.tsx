import cls from './child.module.scss'
import {useState} from "react";
import Modal from "../../../components/widjets/Modal/modal.tsx";

const Child = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const images = [
        "/src/assets/images/nu1.jpg",
        "/src/assets/images/nu1.jpg",
        "/src/assets/images/nu1.jpg",
        "/src/assets/images/nu1.jpg",
        "/src/assets/images/nu1.jpg",
        "/src/assets/images/nu1.jpg",
        "/src/assets/images/nu1.jpg",
        "/src/assets/images/nu1.jpg",
        "/src/assets/images/nu1.jpg",
        "/src/assets/images/nu1.jpg",



    ];
    const openModal = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
    };




    return (
        <div className={cls.child}>
            {images.map((imageSrc, index) => (
                <img
                    key={index}
                    src={imageSrc}
                    alt=""
                    className={cls.imageItem}
                    onClick={() => openModal(imageSrc)}
                />
            ))}

            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <img src={selectedImage} alt="" className={cls.fullscreenImage}/>
                </Modal>

            )}
        </div>
    );
};

export default Child;