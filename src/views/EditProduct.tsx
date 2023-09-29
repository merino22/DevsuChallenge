import React, { useState } from 'react';

interface EditProductProps {
    onSubmit: (newProduct: any) => void;
}

const EditProduct: React.FC<EditProductProps> = ({ onSubmit }) => {
    const [newProductData, setNewProductData] = useState<any>({
        id: '',
        name: '',
        description: '',
        logo: '',
        date_release: '',
        date_revision: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProductData((prevData: any) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(newProductData);
        setNewProductData({
            id: '',
            name: '',
            description: '',
            logo: '',
            date_release: '',
            date_revision: ''
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>ID</label>
                <input 
                  type="text" 
                  name="id" 
                  id="id" 
                  value={newProductData.id}
                  onChange={handleInputChange}
                  required
                  />
            </div>
            <div>
                <label>Nombre</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={newProductData.name}
                  onChange={handleInputChange}
                  required
                  />
            </div>
            <div>
                <label>Descripcion</label>
                <input 
                  type="text" 
                  name="description" 
                  id="description" 
                  value={newProductData.description}
                  onChange={handleInputChange}
                  required
                  />
            </div>
            <div>
                <label>Logo</label>
                <input 
                  type="text" 
                  name="logo" 
                  id="logo" 
                  value={newProductData.logo}
                  onChange={handleInputChange}
                  required
                  />
            </div>
            <div>
                <label>Fecha Liberacion</label>
                <input 
                  type="date" 
                  name="date_release" 
                  id="date_release" 
                  value={newProductData.date_release}
                  onChange={handleInputChange}
                  required
                  />
            </div>
            <div>
                <label>Fecha Revision</label>
                <input 
                  type="date" 
                  name="date_revision" 
                  id="date_revision" 
                  value={newProductData.date_revision}
                  onChange={handleInputChange}
                  required
                  />
            </div>
            <div>
                <button>Reiniciar</button>
                <button type='submit'>Enviar</button>
            </div>
        </form>
    )
}

export default EditProduct;