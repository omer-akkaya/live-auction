import React from "react";

export const LastPrice = ({ bgColor, lastPrice }) => {
  return (
    <div className='flex items-center mt-5 '>
      <div>Last Price</div>
      <div className={`${bgColor} py-3 px-8 rounded-xl transition-all ml-auto`}>
        ${lastPrice}
      </div>
    </div>
  );
};
