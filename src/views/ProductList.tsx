// src/ApiExample.tsx
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import AddButton from '../components/AddButton';
import { fetchProducts } from '../services/pichinchaService';
import dateFormatter from '../utilities/DateFormatter';

const ProductList: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState<any[]>(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    fetchProducts()
      .then((response) => {
        const fetchedData = response.data;
        setData(fetchedData);
        setFilteredData(fetchedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });    
  }, []);

  const handleSearch = (query:string) => {
    const filteredData = data.filter((item:any) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredData(filteredData);
    setCurrentPage(1);
  };

  const totalPages = filteredData ? Math.ceil(filteredData.length / itemsPerPage): 0;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = filteredData ? filteredData.slice(startIndex, endIndex): [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  }

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  }

  return (
    <div className='container'>
      <div className='flex-container' style={{paddingBottom: '1rem'}}>
        <SearchBar onSearch={handleSearch}/>
        <AddButton to='/agregar' content="Agregar" className='yellow-pichincha-bg add-button'/>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Logo</th>
                <th>Nombre del Producto</th>
                <th>Descripcion</th>
                <th>Fecha de Liberacion</th>
                <th>Fecha de Revision</th>
              </tr>
            </thead>
            <tbody>
              {itemsToDisplay.map((item: any) => (
                  <tr key={item.id}>
                    <td><img src={item.logo} alt="logo" style={{maxHeight: '3rem', maxWidth: '5rem'}}/></td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{dateFormatter(item.date_release)}</td>
                    <td>{dateFormatter(item.date_revision)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
};

export default ProductList;
