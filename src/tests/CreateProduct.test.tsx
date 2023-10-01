import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CreateProduct from '../views/CreateProduct';

// Mock the onSubmit function
const onSubmit = jest.fn();

// Mock the productData
const productData = {
  id: '123',
  name: 'Test Product',
  description: 'Description',
  logo: 'logo.jpg',
  date_release: '2023-09-29',
  date_revision: '2023-09-30',
};

test('renders the CreateProduct component', () => {
  render(<CreateProduct onSubmit={onSubmit} productData={productData} checked={false}/>);
  // You can add more specific assertions here if needed
  expect(screen.getByText('ID')).toBeInTheDocument();
  expect(screen.getByText('Nombre')).toBeInTheDocument();
  // Add similar assertions for other elements in the component
});

test('submits the form with valid data', () => {
  render(<CreateProduct onSubmit={onSubmit} productData={productData} checked={false}/>);
  const submitButton = screen.getByText('Enviar');
  fireEvent.click(submitButton);

  // Check if the onSubmit function was called with the correct data
  expect(onSubmit).toHaveBeenCalledWith(productData);
});