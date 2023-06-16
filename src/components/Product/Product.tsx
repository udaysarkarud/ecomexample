import "./Product.css";

const Product = (props: any) => {
  const { img, name, seller, quantity, price, ratings, id } = props.data;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p>$ {price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button className="btn-cart" onClick={() => handleAddToCart(props.data)}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
