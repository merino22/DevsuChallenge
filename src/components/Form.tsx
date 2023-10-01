import React, { useEffect, useState } from 'react';

interface FormProps {
    onSubmit: (newProduct: any) => void;
    productData: {
        id: string,
        name: string,
        description: string,
        logo: string,
        date_release: string,
        date_revision: string
    };
}

const Form: React.FC<FormProps> = ({ onSubmit, productData }) => {

    const [newProductData, setNewProductData] = useState<any>(productData);

    useEffect(() => {

        if (productData.date_release && productData.date_revision) {
            const dateReleaseFrag = productData.date_release.split('T')[0];
            const dateRevisionFrag = productData.date_revision.split('T')[0];

            const dateRelease = new Date(dateReleaseFrag);
            const dateRevision = new Date(dateRevisionFrag);

            const formattedDateRelease = `${dateRelease.getMonth() + 1}/${dateRelease.getDate()}/${dateRelease.getFullYear()}`;
            const formattedDateRevision = `${dateRevision.getMonth() + 1}/${dateRevision.getDate()}/${dateRevision.getFullYear()}`;

            console.log(productData.date_release);

            setNewProductData({
                ...newProductData,
                date_release: formattedDateRelease,
                date_revision: formattedDateRevision
            })
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProductData((prevData: any) => ({
            ...prevData,
            [name]: value
        }));
    };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     onSubmit(newProductData);
    //     setNewProductData({
    //         id: '',
    //         name: '',
    //         description: '',
    //         logo: '',
    //         date_release: '',
    //         date_revision: ''
    //     })
    // };

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
        <form onSubmit={onSubmit} style={formStyle}>
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
                <button className='button button-full grey-bg' style={{maxWidth: '6rem'}}>Reiniciar</button>
                <button className='button button-full yellow-bg' style={{maxWidth: '6rem'}} type='submit'>Enviar</button>
            </div>
        </form>
    )
}

export default Form;