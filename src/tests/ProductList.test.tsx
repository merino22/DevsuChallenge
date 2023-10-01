import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import ProductList from '../views/ProductList';

// Mockear la función fetchProducts
jest.mock('../services/pichinchaService', () => ({
  fetchProducts: jest.fn(() => Promise.resolve({ data: [] })),
}));

describe('Componente ProductList', () => {
  it('renderiza un mensaje de carga inicialmente', async () => {
    render(<ProductList />);
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();

    // Espera a que desaparezca el mensaje de carga
    await waitFor(() => {
      expect(loadingText).not.toBeInTheDocument();
    });
  });

  it('recupera y muestra datos de productos', async () => {
    const mockData = [
      {
        id: 'id-1',
        name: 'Producto 1',
        description: 'Descripción 1',
        logo: 'logo1.png',
        date_release: '2023-10-01',
        date_revision: '2023-10-02',
      },
      // Agrega más datos de muestra si es necesario
    ];

    // Mockear fetchProducts para devolver los datos de muestra
    const fetchProductsMock = require('../services/pichinchaService').fetchProducts;
    fetchProductsMock.mockResolvedValueOnce({ data: mockData });

    render(<ProductList />);

    // Espera a que se muestren los datos
    await waitFor(() => {
      const productRow = screen.getByText('Producto 1');
      expect(productRow).toBeInTheDocument();
    });
  });

  it('maneja la búsqueda y filtra productos', async () => {
    const mockData = [
      {
        id: 1,
        name: 'Producto 1',
        description: 'Descripción 1',
        logo: 'logo1.png',
        date_release: '2023-10-01',
        date_revision: '2023-10-02',
      },
      {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción 2',
        logo: 'logo2.png',
        date_release: '2023-10-03',
        date_revision: '2023-10-04',
      },
    ];

    // Mockear fetchProducts para devolver los datos de muestra
    const fetchProductsMock = require('../services/pichinchaService').fetchProducts;
    fetchProductsMock.mockResolvedValueOnce({ data: mockData });

    render(<ProductList />);

    // Espera a que se muestren los datos
    await waitFor(() => {
      const product1 = screen.getByText('Producto 1');
      const product2 = screen.getByText('Producto 2');
      expect(product1).toBeInTheDocument();
      expect(product2).toBeInTheDocument();
    });

    // Desencadenar una búsqueda
    const searchInput = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(searchInput, { target: { value: 'Producto 1' } });

    // Espera a que se muestren los datos filtrados
    await waitFor(() => {
      const product1 = screen.getByText('Producto 1');
      expect(product1).toBeInTheDocument();
      const product2 = screen.queryByText('Producto 2');
      expect(product2).not.toBeInTheDocument();
    });
  });
});
