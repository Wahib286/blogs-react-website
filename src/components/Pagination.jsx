import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className='fixed bottom-0 left-0 w-full bg-white shadow-md border-t py-3 flex justify-between items-center gap-6 z-50 '>
      {page > 1 && (
        <button
          onClick={() => handlePageChange(page - 1)}
          className='bg-blue-600 text-white px-4 py-2 mx-80 rounded hover:bg-blue-700 transition-all duration-200'
        >
          Previous
        </button>
      )}

      <p className='text-sm font-medium text-gray-700 mx-4'>
        Page <span className='font-bold'>{page}</span> of <span className='font-bold'>{totalPages}</span>
      </p>

      {page < totalPages && (
        <button
          onClick={() => handlePageChange(page + 1)}
          className='bg-blue-600 text-white px-4 py-2 mx-80 rounded hover:bg-blue-700 transition-all duration-200'
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
