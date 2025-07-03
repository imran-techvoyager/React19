import { useState } from "react"
import Nav from "./Navigation/Nav"
import Product from "./Product/Product"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
//database
import products from "./db/data"

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


  }

  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Product />
    </>
  )
}

export default App
