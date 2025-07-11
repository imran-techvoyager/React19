import React from 'react'
import "./Price.css";
import Input from '../../components/Input';

const Price = ({handleChange}) => {
  return (
    <div className='ml'>
      <h2 className="sidebar-title price-title">Price</h2>
       
       <label className="sidebar-label-container">
          <input onChange={handleChange} value="" type="radio" name="test3"/>
          <span className="checkmark"></span>All
    </label>

     <Input
      handleChange={handleChange}
      value={50}
      title="$0-50"
      name="test3"
     />
     <Input
      handleChange={handleChange}
      value={100}
      title="$50-100"
      name="test3"
     />

    </div>
  )
}

export default Price