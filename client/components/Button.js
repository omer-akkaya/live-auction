import React from "react";

const Button = ({ offer, handleClick }) => {
  return (
    <button
      className='bg-green-600 mt-10 p-3 rounded-2xl shadow-md font-medium hover:bg-green-800 transition-all hover:text-white'
      onClick={handleClick}
    >
      Make offer for ${offer}
    </button>
  );
};

export default Button;
