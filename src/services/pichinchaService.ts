import axios from "axios";

const config = {
    headers: {
      'authorId': 101,
    },
  };

const API_BASE_URL = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp';

export const fetchProducts = () => {
    return axios.get(`${API_BASE_URL}/products`, config);
};

export const createProduct = (newProduct: any) => {
    return new Promise((resolve, reject) => {
        axios.post(`${API_BASE_URL}/products`, newProduct, config)
        .then((response) => {
            console.log('Product created: ', newProduct);
        })
        .catch((error) => {
            console.error('Error creating new product:', error);
        });
    })
};

export const deleteProduct = (productId: string) => {
    return axios.delete(`${API_BASE_URL}/products?id=${productId}`, config);
};