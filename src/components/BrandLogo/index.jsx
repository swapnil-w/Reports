import React from "react";
import brand_logo from "../../assets/images/Navbar/Logo.svg";
import "./index.css";

const BrandLogo = () => {
  return (
    <div className='brand_logo'>
      <img src={brand_logo} alt='brand_logo' />
    </div>
  );
};

export default BrandLogo;
