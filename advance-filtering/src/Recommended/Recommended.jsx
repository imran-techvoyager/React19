import React from 'react'
import "./Recommended.css";
import Button from '../components/Button';

const Recommended = () => {
  return (
    <>
       <div>
          <h2 className='recommended-title'>Recommended</h2>
          <div className="recommended-flex">
            <button className='btns'>All products</button>
            <Button onClickHandler={handleClick} value="" title='All products'/>
            <Button onClickHandler={handleClick} value="Nike" title='Nike'/>
            <Button onClickHandler={handleClick} value="Adidas" title='Adidas'/>
            <Button onClickHandler={handleClick} value="Puma" title='Puma'/>
            <Button onClickHandler={handleClick} value="Vans" title='Vans'/>
          </div>
       </div>
    </>
  )
}

export default Recommended