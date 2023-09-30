import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

interface ContextMenuProps {
  product: []
}

const ContextMenu: React.FC<ContextMenuProps> = ({product}) => {

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
            <ConfirmationModal isOpen={isModalOpen} onClose={closeModal} content={product}/>
            </div>
        </div>
    );
}

export default ContextMenu;