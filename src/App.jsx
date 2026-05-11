import { useEffect, useState } from "react";
import SearchBar from './components/SearchBar';
import ProductList from "./components/ProductList";

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
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <ProductList products={filteredProducts} />
    </>
  );
}

export default App;
