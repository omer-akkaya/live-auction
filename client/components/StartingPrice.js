import React from "react";

function StartingPrice({ startingPrice }) {
  return (
    <div className='flex items-center'>
      <div>Starting Price</div>
      <div
        className={`py-3 px-8 rounded-xl transition-all bg-slate-300 ml-auto`}
      >
        ${startingPrice}
      </div>
    </div>
  );
}

export default StartingPrice;
