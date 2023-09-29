import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

const ContextMenu: React.FC<any> = ({}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      }
    
      const closeModal = () => {
        setIsModalOpen(false);
      }

    return (
        <div className="dropdown-container" tabIndex={-1}>
            <div className="three-dots"></div>
            <div className="dropdown">
            <a href="/editar"><div>Editar</div></a>
            <a onClick={openModal}><div>Eliminar</div></a>
            <ConfirmationModal isOpen={isModalOpen} onClose={closeModal} content="Seguro que quieres eliminar este producto?"/>
            </div>
        </div>
    );
}

export default ContextMenu;