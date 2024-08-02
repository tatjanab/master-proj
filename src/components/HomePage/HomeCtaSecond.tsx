import { Link } from "react-router-dom";

function HomeCtaSecond() {
  return (
    <div className='my-16 flex flex-col items-center'>
      <h1 className='text-4xl'>KEEP-FOREVER QUALITY</h1>
      <p className='uppercase mt-2'>
        Find pieces crafted from exquisite materials, built to last .
      </p>
      <div className='flex flex-row gap-4 mt-4'>
        <Link to={"/products/living-room"} className='button-main outline'>
          Shops sofas
        </Link>
        <Link to={"/products/bedroom"} className='button-main outline'>
          Shops bed frames
        </Link>
      </div>
    </div>
  );
}

export default HomeCtaSecond;
