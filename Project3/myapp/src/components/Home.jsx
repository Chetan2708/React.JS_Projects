import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
       
        setProductList(data.products); // Set productList with the products array
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addtocarthandler = (values) => {
    dispatch({ type: "addToCart", payload: values });
    dispatch({ type: "calculatePrice" });
    toast.success("Added Successfully");
  };

  return (
    <div className="home">
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          name={product.title}
          price={product.price}
          id={product.id}
          imgSrc={product.thumbnail} // Assuming thumbnail is the property containing the image URL
          handler={addtocarthandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="product">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h2>${price}</h2>
    <button onClick={() => handler({ name, id, price, quantity: 1, imgSrc })}>
      {" "}
      Add to Cart{" "}
    </button>
  </div>
);

export default Home;
