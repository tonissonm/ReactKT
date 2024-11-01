import React, { useRef, useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const modal = modalRef.current;
        if (isOpen) {
            modal.showModal();
        } else {
            modal.close();
        }
    }, [isOpen]);

    const handleBackdropClick = (e) => {
        if (e.target === modalRef.current) {
            onClose();
        }
    };

    return (
        <dialog ref={modalRef} className="modal" onClick={handleBackdropClick}>
            <div className="modal-content">
                {children}
                <button className="text-button" onClick={onClose}>Close</button>
            </div>
        </dialog>
    );
};

export default Modal;