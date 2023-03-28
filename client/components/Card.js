import React, { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";
import Image from "./Image";
import { LastPrice } from "./LastPrice";
import StartingPrice from "./StartingPrice";
import Title from "./Title";

const Card = (props) => {
  const [lastPrice, setLastPrice] = useState(null);
  const [offer, setOffer] = useState(null);
  const [bgColor, setBgColor] = useState("");

  async function handleClick() {
    const response = await fetch("http://localhost:7000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: props.id, lastPrice: offer }),
    });
    const json = await response.json();
    props.handleSocket(json);
    setLastPrice(offer);
  }

  useEffect(() => {
    setOffer(lastPrice + 500);
    setBgColor("bg-red-500 text-black");
    setTimeout(() => {
      setBgColor("bg-slate-800 text-white");
    }, 600);
  }, [lastPrice]);

  useEffect(() => {
    setLastPrice(props.startingPrice);
    setLastPrice(props.lastPrice);
  }, [props.startingPrice, props.lastPrice]);

  return (
    <div className='bg-gray-100 rounded-2xl shadow-lg w-[450px] border-2 border-gray-200 p-8 mx-auto my-10 flex flex-col text-xl'>
      <Title name={props.name} />
      <Image photoUrl={props.photoUrl} />
      <StartingPrice startingPrice={props.startingPrice} />
      <LastPrice bgColor={bgColor} lastPrice={lastPrice} />
      <Button handleClick={handleClick} offer={offer} />
    </div>
  );
};

export default Card;
