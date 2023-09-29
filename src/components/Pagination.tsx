// Pagination.tsx
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ 
    currentPage, totalPages, onPageChange, itemsPerPage, onItemsPerPageChange 
    }) => {
  return (
    <nav>
      <div className='items-per-page'>
            <label>Pagination</label>
            <select 
             value={itemsPerPage}
             onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>   
      </div>
    </nav>
  );
};

export default Pagination;
