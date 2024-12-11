import React from 'react';
import styles from './Modal.module.css';

export default function ConfirmationModal({ isOpen, onClose, handleNextStep, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.warningIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h2 className={styles.title}>
          ¿Estás seguro que deseas continuar con la solicitud?
        </h2>
        
        <p className={styles.description}>
          Puedes cancelarla en cualquier momento desde el panel de solicitudes.
        </p>
        
        <div className={styles.buttonContainer}>
          <button className={styles.closeButton} onClick={onClose}>
            Cerrar
          </button>
          <button className={styles.continueButton} onClick={handleNextStep}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

