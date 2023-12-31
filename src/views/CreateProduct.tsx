import React, { useEffect, useState } from 'react';

interface CreateProductProps {
    onSubmit: (newProduct: any) => void;
    productData: {
        id: string,
        name: string,
        description: string,
        logo: string,
        date_release: string,
        date_revision: string
    };
    checked: boolean
}

const CreateProduct: React.FC<CreateProductProps> = ({ onSubmit, productData, checked }) => {

    const [newProductData, setNewProductData] = useState<any>(productData);

    // useEffect(() => {

    //     if (productData.date_release && productData.date_revision) {

    //         setNewProductData({
    //             ...newProductData,
    //             date_release: productData.date_release,
    //             date_revision: productData.date_revision
    //         })
    //     }
    // }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProductData((prevData: any) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(newProductData.date_release);
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

    const handleReset = (e: React.FormEvent) => {
        e.preventDefault();
        setNewProductData({
            id: '',
            name: '',
            description: '',
            logo: '',
            date_release: '',
            date_revision: ''
        })
    }

    const formStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: '1',
        gap: '1rem',
        maxWidth: '100vw',
        marginBlock: '0 auto',
        marginInline: '10vw'
    }

    const inputStyle: React.CSSProperties = {
        height: '2rem',
        marginInline: '0.3rem'
    }    

    const inputLabelStyle: React.CSSProperties = {
        textAlign: 'left',
        fontWeight: 'bold',
        marginInline: '0.3rem',
        paddingBottom: '0.5rem',
    }

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <div className='flex flex-row justify-evenly'>
                <div className='flex flex-col input-container'>
                    <label style={inputLabelStyle}>ID</label>
                    <input 
                    type="text" 
                    name="id" 
                    id="id" 
                    value={newProductData.id}
                    onChange={handleInputChange}
                    style={inputStyle}
                    disabled={checked}
                    required
                    />
                </div>
                <div className='flex flex-col input-container'>
                    <label style={inputLabelStyle}>Nombre</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={newProductData.name}
                    onChange={handleInputChange}
                    style={inputStyle}
                    required
                    />
                </div>
            </div>
            <div className='flex flex-row justify-evenly'>
                <div className='flex flex-col input-container'>
                    <label style={inputLabelStyle}>Descripcion</label>
                    <input 
                    type="text" 
                    name="description" 
                    id="description" 
                    value={newProductData.description}
                    onChange={handleInputChange}
                    style={inputStyle}
                    required
                    />
                </div>
                <div className='flex flex-col input-container'>
                    <label style={inputLabelStyle}>Logo</label>
                    <input 
                    type="text" 
                    name="logo" 
                    id="logo" 
                    value={newProductData.logo}
                    onChange={handleInputChange}
                    style={inputStyle}
                    required
                    />
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className='flex flex-col input-container'>
                    <label style={inputLabelStyle}>Fecha Liberacion</label>
                    <input 
                    type="date" 
                    name="date_release" 
                    id="date_release" 
                    value={newProductData.date_release}
                    onChange={handleInputChange}
                    style={inputStyle}
                    required
                    />
                </div>
                <div className='flex flex-col input-container'>
                    <label style={inputLabelStyle}>Fecha Revision</label>
                    <input 
                    type="date" 
                    name="date_revision" 
                    id="date_revision" 
                    value={newProductData.date_revision}
                    onChange={handleInputChange}
                    style={inputStyle}
                    required
                    />
                </div>
            </div>
            <div className='flex flex-row justify-evenly'>
                <button className='button button-full grey-bg' style={{maxWidth: '6rem'}} onClick={handleReset}>Reiniciar</button>
                <button className='button button-full yellow-bg' style={{maxWidth: '6rem'}} type='submit'>Enviar</button>
            </div>
        </form>
    )
}

export default CreateProduct;