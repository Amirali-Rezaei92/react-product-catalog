import { useEffect, useState } from "react";
import SearchBar from './components/SearchBar';
import ProductList from "./components/ProductList";
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);



  const API = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000*4);
        
      });

  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
  if (loading === true) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>

    );
  } else {
    return (

      <div className="background p-5 text-center ">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
        />

        <ProductList products={filteredProducts} />
      </div>
    )
  }
}

export default App;

