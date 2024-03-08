import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import ReactSlider from 'react-slider';


const Filter = ({ onFilterChange }) => {
  const location = useLocation();

  const useParams = new URLSearchParams(location.search);
  const initialPrice = useParams.get('price') || '';
  const initialColor = useParams.get('color') || '';
const initialColors = initialColor ? initialColor.split(',') : [];
const [selectedColors, setSelectedColors] = useState(initialColors);

  const initialSize = useParams.get('size') || '';
  const initialSizes = initialSize ? initialSize.split(',') : [];
  const [selectedSizes, setSelectedSizes] = useState(initialSizes)

  const parsePriceRange = (priceParam) => {
    if (priceParam) {
      const [min, max] = priceParam.split('-').map(parseFloat);
      return [min, max];
    }
    return [0, 100];
  };

  const initialPriceRange = parsePriceRange(initialPrice);

  const [selectedPriceRange, setSelectedPriceRange] = useState(initialPriceRange);
  const handleChange = (newValues) => setSelectedPriceRange(newValues);

  // const [selectedColors, setSelectedColors] = useState(
  //   initialColor ? [initialColor] : []
  // );
  // const [selectedSizes, setSelectedSizes] = useState(
  //   initialSize ? [initialSize] : []
  // );
  const initialSearchTerm = useParams.get('search') || '';
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleColorChange = (color) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    setSelectedColors(updatedColors);
    onFilterChange({
      price: selectedPriceRange,
      color: updatedColors,
      size: selectedSizes,
      searchTerm,
    });
  };

  const handleSizeChange = (size) => {
    const updatedSizes = selectedSizes.includes(size) ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];
    setSelectedSizes(updatedSizes);
    onFilterChange({
      price: selectedPriceRange,
      color: selectedColors,
      size: updatedSizes,
      searchTerm,
    });
  };



  useEffect(() => {
    const params = new URLSearchParams();
    params.set('price', `${selectedPriceRange[0]}-${selectedPriceRange[1]}`);
    if (selectedColors.length > 0) params.set('color', selectedColors.join(','));
    if (selectedSizes.length > 0) params.set('size', selectedSizes.join(','));
    if (searchTerm) params.set('search', searchTerm);
    

    window.history.replaceState({}, '', `?${params.toString()}`);
    onFilterChange({
      price: selectedPriceRange,
      color: selectedColors,
      size: selectedSizes,
      searchTerm,
    });
  }, [selectedPriceRange, selectedColors, selectedSizes, searchTerm]);

  const handleFilterChange = () => {
    
    onFilterChange({
      price: selectedPriceRange,
      color: selectedColors,
      size: selectedSizes,
      searchTerm,
    });
    console.log(searchTerm);
  };

  return (
    <div className="filter-container">
      <Button className='bordered-box bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-600' onClick={() => setDropdownVisible(!isDropdownVisible)}>
      Filter
      </Button>

      {isDropdownVisible && (
        <div className="filter-dropdown">

          <label className='block text-left font-semibold'>
          <h1 className='text-2xl underline underline-offset-8'>By Item Name/ Item Brand</h1>
            <input className='block border p-2 rounded my-4' type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button className='applyFilter' onClick={handleFilterChange}>Filter</button>
          </label>
          

          <label className='block text-left w-3/12 font-semibold ml-12 mr-8'>
  <h1 className='text-2xl underline underline-offset-8'>By Price</h1>
  <ReactSlider
    className="slider"
    thumbClassName="thumb"
    trackClassName="track"
    defaultValue={selectedPriceRange}
    ariaLabel={['Lower thumb', 'Upper thumb']}
    ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
    renderThumb={(props, state) => (
      <div {...props} className={`thumb ${state.index === 0 ? 'left-thumb' : 'right-thumb'}`}>
        {/* {state.valueNow} */}
      </div>
    )}
    pearling
    minDistance={10}
    onChange={(selectedPriceRange) => handleChange(selectedPriceRange)}
  />
  <div style={{ display: 'flex', marginTop:"30px", fontSize:"18px" }}>
    <div className="left-thumb-value">Price: ${selectedPriceRange[0]} &nbsp;- &nbsp;</div>
    <div className="right-thumb-value">  ${selectedPriceRange[1]}</div>
  </div>
  <button className='applyFilter' onClick={handleFilterChange}>
    Filter
  </button>
</label>


          <label className="block text-center w-3/12 font-semibold">
          <h1 className='text-2xl mb-3 text-left underline underline-offset-8'>By Size </h1>
            {["XS", "SM", "LG", "MD", "XXL"].map((size) => (
              <div key={size} className="mb-2 text-left">
                <input className='mr-6 w-4 h-4 text-center' type="checkbox" value={size} checked={selectedSizes.includes(size)} onChange={() => handleSizeChange(size)} />
                <label className='text-center'>{size}</label>
              </div>
            ))}
          </label>

          <label className="block text-center w-3/12 float-right font-semibold">
  <h1 className='text-2xl mb-3 text-left underline underline-offset-8'>By Color</h1>
  {["blue", "black", "brown", "gray", "gold"].map((color) => (
    <div key={color} className='mb-2 text-left'>
      <input
        className='mr-6 w-7 h-7 rounded-full shadow mb-2'
        type="checkbox"
        value={color}
        checked={selectedColors.includes(color)}
        onChange={() => handleColorChange(color)}
        style={{ backgroundColor: color, border: '1px solid #ccc' }} // Add this line
      />
      <label className='text-center text-xl'>{color}</label>
    </div>
  ))}
</label>


          
        </div>
      )}
    </div>
  );
};

export default Filter;
