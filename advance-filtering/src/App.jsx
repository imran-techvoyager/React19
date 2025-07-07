import { useState } from "react"
import Nav from "./Navigation/Nav"
import Product from "./Product/Product"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
import "./index.css"
//database
import products from "./db/data"
import Card from "./components/Card"

//now we will convert this app component into store like in redux tool kit for state managment 
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //---------Input filter----------
  const handleInputChange = e => {
    setQuery(e.target.value);
  }

  const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);

  //---------Radio filter----------
  const handleChange = (e) => setSelectedCategory(e.target.value);

  //---------Button filter----------
  const handleClick = (e) => setSelectedCategory(e.target.value);


  function filteredData(products, selected, query){
       let filteredProducts = products;

       //filtering input
     if(query){
      filteredProducts = filteredItems
     }

     //Selected Filter

     if(selected){
        filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => category === selected || color === selected || company === selected || newPrice === selected || title === selected)
     }

     return filteredProducts.map(({img, title, star, review, newPrice, prevPrice}) =>(
      <Card 
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        review={review}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />

     ));

    }

    const result = filteredData(products, selectedCategory, query);
    
  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Product result={result}/>
    </>
  )
}

export default App
