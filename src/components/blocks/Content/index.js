import React, { useState, useEffect } from 'react';
import styles from "./Content.module.scss";
import Modal from '../../blocks/Modal';


const Content = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetch('http://test-backend.itdelta.agency/api/images')
            .then(response => response.json())
            .then(data => setImages(data))
    }, []);

    const openModal = (imageId) => {
        fetch(`http://test-backend.itdelta.agency/api/image/${imageId}`)
            .then(response => response.json())
            .then(data => {
                setSelectedImage(data);
            });
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className={styles.container}>
            {images.map((image, index) => (
                <div className={styles.row} key={index}>
                    <div className={styles.item} onClick={() => openModal(image.id)}>
                        <img src={image.image} alt={`Image ${index + 1}`} />
                        <p>Id:{image.id}</p>
                    </div>
                </div>
            ))}
            {selectedImage && (
                <Modal
                    imageUrl={selectedImage.image}
                    comments={selectedImage.comments}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default Content;
