import { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";

function MobileHeader({ categories }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='mobile-menu my-2 flex self-end md:hidden'>
      <div className='flex flex-row'>
        <div className='cart-link mr-4 self-center pr-4 pt-0'>
          <CartIcon />
          <Link
            to='/cart'
            className='cart-icon text-gray-600 hover:text-gray-400'
          ></Link>
        </div>
        <div className='menu-icon' onClick={toggleMenu}>
          <img src='./../src/assets/images/menu.svg' />
        </div>
      </div>

      <ul className={`menu-items shadow-md ${!isMenuOpen ? "hidden" : ""}`}>
        {categories &&
          categories.map((category) => (
            <li key={category.name} className='py-2'>
              <Link
                to={`/products/${category.name}`}
                className='py-6 uppercase text-gray-600'
              >
                {category.name.split("-").join(" ")}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MobileHeader;
