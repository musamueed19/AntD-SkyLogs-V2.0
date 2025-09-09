import React from 'react'

const Logo = ({ src, size }) => {
  return (
    <div style={{ maxWidth: `${size}px` }} className='transition-all duration-300'>
      <img src={src} style={{ width: `${size}px`, objectFit: "contain" }} />
    </div>
  );
};


export default Logo