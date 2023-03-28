const socket = io.connect("http://192.168.1.44:7000");
import Card from "@/components/Card";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const ProductDisplayer = () => {
  const [products, setProducts] = useState([]);

  function handleSocket(updatedProducts) {
    socket.emit("update", updatedProducts);
  }

  useEffect(() => {
    socket.on("update", (message) => {
      setProducts(message);
    });
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:7000");
      const json = await response.json();
      setProducts(json);
    })();
  }, []);
  return (
    <div className='flex flex-wrap mt-16'>
      {products &&
        products.map(({ id, name, startingPrice, lastPrice, photoUrl }) => {
          return (
            <Card
              id={id}
              startingPrice={startingPrice}
              name={name}
              lastPrice={lastPrice}
              handleSocket={handleSocket}
              photoUrl={photoUrl}
            />
          );
        })}
    </div>
  );
};

export default ProductDisplayer;
