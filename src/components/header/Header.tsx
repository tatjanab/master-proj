import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoryContext";
import MobileHeader from "./MobileHeader";

function Header() {
  const context = useContext(CategoriesContext);

  const { categories } = context;

  return (
    <>
      <header className='relative z-20 w-full bg-white text-xs font-bold drop-shadow-sm'>
        <nav className='mx-auto flex w-full items-center justify-between px-4'>
          <div className='flex items-center justify-between'>
            <Link className='flex-none text-xl font-semibold' to='/'>
              ILS
            </Link>
          </div>
          <div
            id='navbar-with-collapse'
            className='hidden grow basis-full uppercase md:block'
          >
            <div className='mt-0 flex flex-row items-center justify-end gap-5'>
              {!categories && <p className='text-line w-1/3'></p>}
              {categories &&
                categories.map((category) => (
                  <Link
                    key={category.name}
                    to={`/products/${category.name}`}
                    className='border-b-4 border-transparent pb-3 pt-6 text-gray-600 hover:border-gray-600'
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
          <MobileHeader categories={categories} />
        </nav>
      </header>
    </>
  );
}

export default Header;
