import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [apiUrl, setApiUrl] = useState("https://fakestoreapi.com/products");
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(apiUrl);
      const data = await res.json();

      setProducts(data);
    }
    fetchData();
  }, []);

  const showMore = () => {
    setVisibleCount((prev => prev + 5))
  }

  const visibleProducts = products.slice(0, visibleCount);
  return (
    <div className="container">
      <h1 className="shop-title">React Shop</h1>
      <div className="product-container">
        {visibleProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p className="category">{product.category}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
      {visibleCount < products.length && (
        <button onClick={showMore} className="show-more-btn">Show More</button>
      )}
    </div>
  );
}

export default App;
