import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

function Header() {
  return (
    <>
      <header className='drop-shadow-sm w-full bg-white text-xs font-bold z-20'>
        <nav className='w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between'>
          <div className='flex items-center justify-between'>
            <Link className='flex-none text-xl font-semibold ' to='/'>
              ILS
            </Link>
          </div>
          <div
            id='navbar-with-collapse'
            className='hidden basis-full grow sm:block uppercase'
          >
            <div className='flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5'>
              <Link
                to='/products/outdoor'
                className='text-gray-600 pt-6 pb-3 border-b-4 border-transparent hover:border-gray-600'
              >
                Outdoor
              </Link>
              <Link
                to='/products/living-room'
                className=' text-gray-600 pt-6 pb-3 border-b-4 border-transparent hover:border-gray-600'
              >
                Living Room
              </Link>
              <Link
                to='/products/kids'
                className=' text-gray-600 pt-6 pb-3 border-b-4 border-transparent hover:border-gray-600'
              >
                Kids
              </Link>
              <div className='cart-link pr-4'>
                <CartIcon />
                <Link
                  to='/cart'
                  className='cart-icon text-gray-600 hover:text-gray-400'
                ></Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
