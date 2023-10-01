import React, { useEffect, useState } from 'react';
import CreateProduct from './CreateProduct';

interface CreateProductProps {
    onSubmit: (newProduct: any) => void;
}

const EditProduct: React.FC<CreateProductProps> = ({ 
        onSubmit
    }) => {

    const deserializeProduct = () => {
        try {
            const serializedProduct = localStorage.getItem('itemToEdit');
            if (serializedProduct !== null) {
                return JSON.parse(serializedProduct);
            }
        } catch (error) {
            console.log('Error trying to edit product: ', error);
        }
    }

    const retrievedProduct = deserializeProduct();

    function formatDate(inputDate: string): string {
        const date = new Date(inputDate);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = String(date.getFullYear());
        
        return `${year}-${month}-${day}`;
    }

    const [productData, setProductData] = useState<any>({
        id: retrievedProduct.id,
        name: retrievedProduct.name,
        description: retrievedProduct.description,
        logo: retrievedProduct.logo,
        date_release: formatDate(retrievedProduct.date_release),
        date_revision: formatDate(retrievedProduct.date_revision)
    });

    return (
        <div>
            <CreateProduct onSubmit={onSubmit} productData={productData} checked={true}/>
        </div>
    )
}

export default EditProduct;