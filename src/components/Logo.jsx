import React from 'react'

const Logo = ({ src, size, className }) => {
  return (
    <div style={{ maxWidth: `${size}px` }} className={`transition-all duration-300` + className}>
      <img src={src} style={{ width: `${size}px`, objectFit: "contain" }} />
    </div>
  );
};


export default Logo