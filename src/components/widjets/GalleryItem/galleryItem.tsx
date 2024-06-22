import cls from './gallery.module.scss'
import Modal from "../../../components/widjets/Modal/modal.tsx";

import {usePhotoUpload} from "../../hooks/usePhotoUpload.ts";
import {useModal} from "../../hooks/useModal.ts";

const GalleryItem = (category: string) => {


    const {photos, error} = usePhotoUpload(category)
    const {selectedImage, openModal, isModalOpen, closeModal} = useModal()


    if (error)
        return <div>{error}</div>


    return (
        <div className={cls.gallery}>
            {photos.map((photo, index) => (
                <img
                    key={index}
                    src={photo.path_s}
                    alt=""
                    className={cls.imageItem}
                    onClick={() => openModal(photo.path_l)}
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

export default GalleryItem;