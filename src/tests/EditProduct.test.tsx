import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EditProduct from '../views/EditProduct';

describe('Componente EditProduct', () => {
  // Mockear localStorage para propósitos de prueba
  const mockLocalStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  };

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('se renderiza sin errores', () => {
    render(<EditProduct onSubmit={() => {}} />);
  });

  it('deserializa correctamente los datos del producto desde localStorage', () => {
    // Mockear un objeto de producto de ejemplo
    const muestraProducto = {
      id: 1,
      nombre: 'Producto de Muestra',
      descripcion: 'Descripción de muestra',
      logo: 'muestra-logo.png',
      fechaLanzamiento: '2023-10-01',
      fechaRevision: '2023-10-02',
    };

    // Mockear localStorage.getItem para devolver el producto de muestra
    mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify(muestraProducto));

    const { getByText, getByLabelText } = render(<EditProduct onSubmit={() => {}} />);

    // Verificar si los datos del producto se muestran correctamente en el componente CreateProduct
    expect(getByText('Producto de Muestra')).toBeInTheDocument();
    expect(getByLabelText('Descripción')).toHaveValue('Descripción de muestra');
    expect(getByLabelText('Logo')).toHaveValue('muestra-logo.png');
    expect(getByLabelText('Fecha de Lanzamiento')).toHaveValue('2023-10-01');
    expect(getByLabelText('Fecha de Revisión')).toHaveValue('2023-10-02');
  });

  it('maneja errores al deserializar los datos del producto', () => {
    // Mockear un escenario en el que falla el análisis JSON
    mockLocalStorage.getItem.mockReturnValueOnce('json-invalido');

    // Suprimir la salida de console.log durante la prueba
    const consoleLogOriginal = console.log;
    console.log = jest.fn();

    render(<EditProduct onSubmit={() => {}} />);

    // Esperar que se registre un mensaje de error en la consola
    expect(console.log).toHaveBeenCalledWith('Error al intentar editar el producto: ', expect.any(Error));

    // Restaurar console.log original
    console.log = consoleLogOriginal;
  });

});
