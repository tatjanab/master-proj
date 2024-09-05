import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useContext, useState } from "react";
import { CategoriesContext } from "../contexts/CategoryContext";
import LoadingDisplay from "./loaders/LoadingDisplay";

function Header() {
  const context = useContext(CategoriesContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { categories } = context;

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className='drop-shadow-sm w-full bg-white text-xs font-bold z-20 relative'>
        <nav className='w-full mx-auto px-4 flex items-center justify-between'>
          <div className='flex items-center justify-between'>
            <Link className='flex-none text-xl font-semibold ' to='/'>
              ILS
            </Link>
          </div>
          <div
            id='navbar-with-collapse'
            className='hidden basis-full grow md:block uppercase'
          >
            <div className='flex gap-5 flex-row items-center justify-end mt-0'>
              {!categories && <LoadingDisplay />}
              {categories &&
                categories.map((category) => (
                  <Link
                    key={category.name}
                    to={`/products/${category.name}`}
                    className='text-gray-600 pt-6 pb-3 border-b-4 border-transparent hover:border-gray-600'
                  >
                    {category.name.split("-").join(" ")}
                  </Link>
                ))}
              <div className='cart-link pr-4'>
                <CartIcon />
                <Link
                  to='/cart'
                  className='cart-icon text-gray-600 hover:text-gray-400'
                ></Link>
              </div>
            </div>
          </div>

          <div className='md:hidden flex self-end mobile-menu my-2'>
            <div className='flex flex-row'>
              <div className='cart-link pt-0 mr-4 pr-4 self-center'>
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

            <ul
              className={`menu-items shadow-md ${!isMenuOpen ? "hidden" : ""}`}
            >
              {categories &&
                categories.map((category) => (
                  <li key={category.name} className='py-2'>
                    <Link
                      to={`/products/${category.name}`}
                      className='text-gray-600 py-6 uppercase'
                    >
                      {category.name.split("-").join(" ")}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
