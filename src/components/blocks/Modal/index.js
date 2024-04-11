import React, { useState } from 'react';
import styles from "./Modal.module.scss";

const Modal = ({ imageUrl, comments, onClose }) => {
    const [commentText, setCommentText] = useState('');

    const handleSubmit = () => {
        setCommentText('');
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <img src={imageUrl} alt="Large Image" />
                <p>Comment</p>
                <form onSubmit={handleSubmit}>
                    <textarea value={commentText} onChange={(e) => setCommentText(e.target.value)} />
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;