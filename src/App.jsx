import { useEffect, useState } from "react";
import SearchBar from './components/SearchBar';
import ProductList from "./components/ProductList";
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortItems, setSortItems] = useState('');



  const API = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000 * 4);

      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      })

  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
  if (error) {
    return (
      <div className="error-box">
        <h2> ERROR in give data</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="no-results">
        <h2>No products found</h2>
        <p>Try searching for something else</p>
      </div>
    );
  }


  let sortedProducts = [...filteredProducts];

  if (sortItems === "Low-High") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortItems === "High-Low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }





  return (
    <div className="background p-5 text-center ">
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <select className="form-select w-25" name="" id="" onChange={(e) => setSortItems(e.target.value)}>
        <option value="">Sort</option>
        <option value="Low-High">Low → High</option>
        <option value="High-Low">High → Low</option>
      </select>
      <ProductList products={sortedProducts} />
    </div>
  )
}


export default App;

