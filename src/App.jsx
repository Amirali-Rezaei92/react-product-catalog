import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(true)
  const API = "https://fakestoreapi.com/products"
  import SearchBar from './components/SearchBar';
  

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <SearchBar 
    searchText={searchText}
    setSearchText={setSearchText}
    />
  )
}
export default App