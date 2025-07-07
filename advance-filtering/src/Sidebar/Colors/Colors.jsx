import React from 'react'
import "./Colors.css";
import Input from '../../components/Input';

const Colors = () => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Color</h2>
        
        <label className="sidebar-label-container">
          <input onChange={handleChange} value="" type="radio" name="test2"/>
          <span className="checkmark all"></span>All
        </label>

        <Input 
          handleChange={handleChange}
          name="test2"
          value="black"
          title="Black"
          color="black"
        />
        <Input 
          handleChange={handleChange}
          name="test2"
          value="red"
          title="Red"
          color="red"
        />
    </div>
  )
}

export default Colors