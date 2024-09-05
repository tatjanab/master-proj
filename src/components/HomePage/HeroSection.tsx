import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div className='hero-section md:h-2/3 h-auto mb-16'>
        <div className='hero-content'>
          <h1 className='md:text-5xl text-md mb-2'>High design</h1>
          <p>Shop pieces made to last</p>
          <Link className='button-main mt-2' to={"/products/living-room"}>
            Shop living room
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
