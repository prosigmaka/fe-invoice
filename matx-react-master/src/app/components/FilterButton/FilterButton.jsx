import React from 'react';
import "./FilterButton.css"
const FilterButton = () => {
  return (
      <div className="container">
        <div className="button">
          <a href="#" className="btn btn-1"> Week </a>
          <a href="#" className="btn btn-1"> Month </a>
          <a href="#" className="btn btn-1"> Year </a>
        </div>      
      </div>
  )
};

export default FilterButton;
