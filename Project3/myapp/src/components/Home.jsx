import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673202";
const img2 =
  "https://denimcarts.com/wp-content/uploads/2023/04/6fdaa2_d24c9d7a1bfa474ea9a528c1b5e8edefmv2.jpg";
  const img3 ="https://www.reliancedigital.in/medias/Apple-iPhone-14-Pro-Mobile-Phone-493177782-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NDEzN3xpbWFnZS9qcGVnfGltYWdlcy9oMjIvaDRmLzk4OTA0NTA5MzE3NDIuanBnfDkyOGU4MDdkMWI3ODkwMzU1ZDhkMjJjMWM4ZTYzZWY0NTQzNTA5MmFlYmE2MDgyY2FlNDlkOTQ4YTY4YzY0NzM"
  const img4 = "https://cdn.shopify.com/s/files/1/0021/4076/6277/products/mgyj3hn-a-apple-original-imafy8whfhhthw8b.jpg?v=1677344282"
  const Home = () => {
  const productList = [
    {
      name: "Mac-book",
      price: 200000,
      id: "hey",
      imgSrc: img1,
    },
    {
      name: " Basketball Shoes",
      price: 600,
      id: "Some",
      imgSrc: img2,
    },
    { name: "Iphone 14 pro ", price: 12000, id: "Phone", imgSrc: img3 },
    { name: "APPLE Airpods Max Bluetooth Headset", price: 9000, id: "Headphone", imgSrc: img4 },


  ];

  const dispatch = useDispatch();
  const addtocarthandler = (values) => {
    dispatch({ type: "addToCart", payload: values });
    dispatch({ type: "calculatePrice" });
    toast.success("Added Successfully");
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          name={i.name}
          price={i.price}
          id={i.id}
          imgSrc={i.imgSrc}
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
