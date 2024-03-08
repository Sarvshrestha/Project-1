// product.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import ProductList from '../../data/ProductList.json';
import Filter from './filter';
import Pagination from 'react-js-pagination';
import './products.css';
import {BsFillGridFill, BsList} from "react-icons/bs";

const Product = () => {
  const itemsPerPage = 10;
  const [activePage, setActivePage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(ProductList);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const location = useLocation();
  const useParams = new URLSearchParams(location.search);

  useEffect(() => {
    const filters = {
      price: useParams.get('price') ? useParams.get('price').split(',').map(Number) : [0, 100],
      color: useParams.get('color') || '',
      size: useParams.get('size') ? useParams.get('size').split(',') : [],
      searchTerm: useParams.get('search') || '',
    };

    handleFilterChange(filters);
  }, []);

  const handleFilterChange = (filters) => {
    let filteredItems = ProductList;

    if (filters.price && filters.price.length === 2) {
      const [minPrice, maxPrice] = filters.price;
      filteredItems = filteredItems.filter(
        (item) => parseInt(item.price.slice(1)) >= minPrice && parseInt(item.price.slice(1)) <= maxPrice
      );
    }

    if (filters.color && filters.color.length > 0) {
      filteredItems = filteredItems.filter(
        (item) => filters.color.includes(item.color)
      );
    }

    if (filters.size && filters.size.length > 0) {
      filteredItems = filteredItems.filter((item) =>
        filters.size.some((selectedSize) => item.size.includes(selectedSize))
      );
    }

    if (filters.searchTerm) {
      const searchTerm = filters.searchTerm.toLowerCase();
      filteredItems = filteredItems.filter(
        (item) =>
          item.itemname.toLowerCase().includes(searchTerm) ||
          item.itembrand.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredProducts(filteredItems);
    setActivePage(1);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const toggleViewMode = (mode) => {
    setViewMode(mode)
  };

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <>
    <div className='inline-flex ml-10'><button onClick={() => toggleViewMode('grid')} className="m-2 p-2 bg-teal-100 rounded-md text-black">
        {viewMode === 'grid' } <BsFillGridFill className="icon" />
      </button>

      <button onClick={() => toggleViewMode('list')} className="m-2 p-2 bg-teal-100 rounded-md text-black"> <BsList className="icon" />
      </button></div>
      <Filter onFilterChange={handleFilterChange} />

      <div className="block item-center justify-center min-h-screen container mx-auto">
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' : 'flex flex-wrap gap-8'}>
          {currentItems.map((record) => (
            <div key={record.id} className={viewMode === 'grid' ? 'rounded-xl shadow-lg' : 'w-full p-4 border'}>
              <Card items={record} />
            </div>
          ))}
        </div>

        <div className='block item-center justify-center'>
          {/* <button onClick={toggleViewMode} className='m-2 p-2 bg-blue-500 text-white rounded-md'>
            {viewMode === 'grid' ? 'Switch to List View' : 'Switch to Grid View'}
          </button> */}
           
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={filteredProducts.length}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
            innerClass="pagination"
          />
        </div>
      </div>
    </>
  );
};

export default Product;
