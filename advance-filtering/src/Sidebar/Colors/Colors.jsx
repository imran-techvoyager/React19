import React from 'react'
import "./Colors.css";

const Colors = () => {
  return (
    <div>
      <h2 className="sidebar-title price-title">Color</h2>

        <label className="sidebar-label-container color-title">
          <input type="radio" name='test'/>
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="checkmark"></span>Black
        </label>
    </div>
  )
}

export default Colors