import React from 'react'
import "./Category.css";
import Input from '../../components/Input';

const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} value="" type="radio" name="test"/>
          <span className="checkmark"></span>All
        </label>
        <Input 
           handleChange={handleChange}
           value="sneakers"
           title="sneakers"
           name="test"
        />
        <Input 
           handleChange={handleChange}
           value="heels"
           title="Heels"
           name="test"
        />
      </div>
    </div>
  )
}

export default Category