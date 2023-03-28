import React from "react";

const Image = ({ photoUrl }) => {
  return (
    <div className='w-full h-[300px] my-10 '>
      <img
        width={400}
        height={400}
        className='block mx-auto'
        src={photoUrl}
        alt={"imag"}
      ></img>
    </div>
  );
};

export default Image;
