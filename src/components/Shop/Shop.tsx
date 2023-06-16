import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import { ProductType } from "../../types";
const Shop = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);
  const handleAddToCart = (product: any) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            data={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <h2>cart history</h2>
        <p>{cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
