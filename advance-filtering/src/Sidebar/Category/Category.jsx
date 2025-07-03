import React from 'react'
import "./Category.css";

const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="checkmark"></span>Sneaker
        </label>
      </div>
    </div>
  )
}

export default Category