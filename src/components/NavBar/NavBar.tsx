import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import "./Navbar.scss";
import TopNavBar from "../DiscountTopBar/DiscountSection";

const Navbar = () => {
  const [showDiscount, setShowDiscount] = useState(false);
  const handleCartClick = () => {
    if (!showDiscount) {
      setShowDiscount(true);
      setTimeout(() => {
        setShowDiscount(false);
      }, 3000);
    }
  };
  return (
    <>
      {showDiscount && <TopNavBar />}
      <nav className="navbar">
        <div className="navbar__hamburger">
          <FaBars size={24} className="icon" />
        </div>

        <div className="navbar__logo">
          <img src="src/assets/logomain.png" alt="VisionCare Logo" />
        </div>

        <div className="navbar__shop" onClick={handleCartClick}>
          <FiShoppingBag size={24} className="icon" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
