import React, { useState } from "react";

interface ConfirmationModalProps {
    isOpen: boolean;
    content: string;
    onClose: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, content }) => {

    const modalStyle: React.CSSProperties = {
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
      };
    
      const modalContentStyle: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 1001,
      };

      return (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}>
              X
            </button>
            {content}

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <button>Cancelar</button>
                <button>Confirmar</button>
            </div>
          </div>
        </div>
      );
}

export default ConfirmationModal;