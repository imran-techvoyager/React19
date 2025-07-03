import React from 'react'
import "./Sidebar.css";
import Category from "./Category/Category"
import Colors from "./Colors/Colors"
import Price from "./Price/Price"

const Sidebar = () => {
  return (
    <>
        <section className="sidebar">
            <div className="logo-container">
                <h2>🛒</h2>
            </div>

            <Category />
            <Price />
            <Colors />
        </section>
    </>
  )
}

export default Sidebar