import { Link } from "react-router-dom";

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
            <div className='flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5'>
              <Link
                to='/products/outdoor'
                className='text-gray-600 pt-4 pb-3 border-b-4 border-transparent hover:border-gray-600'
              >
                Outdoor
              </Link>
              <Link
                to='/products/living-room'
                className=' text-gray-600 pt-4 pb-3 border-b-4 border-transparent hover:border-gray-600'
              >
                Living Room
              </Link>
              <Link
                to='/products/kids'
                className=' text-gray-600 pt-4 pb-3 border-b-4 border-transparent hover:border-gray-600'
              >
                Kids
              </Link>
              <Link
                to='/cart'
                className='cart-icon text-gray-600 hover:text-gray-400'
              ></Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
