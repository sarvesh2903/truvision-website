import { FaGlasses, FaEye } from "react-icons/fa";
import { GiSunglasses } from "react-icons/gi";
import { FaChild } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import "./Categories.scss";

const categories = [
  { name: "Spectacles", icon: <FaGlasses /> },
  { name: "Sunglasses", icon: <GiSunglasses /> },
  { name: "Contact Lenses", icon: <FaEye /> },
  { name: "Powered Sunglasses", icon: <GiSunglasses /> },
  { name: "Kids Wear", icon: <FaChild /> },
  { name: "Digi Safe Glasses", icon: <LiaLaptopCodeSolid /> },
];

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((item, index) => (
        <div className="category-item" key={index}>
          <div className="category-icon">{item.icon}</div>
          <p className="category-label">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
