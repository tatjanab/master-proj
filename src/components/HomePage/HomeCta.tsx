import { Link } from "react-router-dom";

function HomeCta() {
  return (
    <div className='cta-section mb-16 px-4'>
      <h2 className='text-3xl mb-2'>Quality doesn't need to wait</h2>
      <p>Our collection is crafted using the finest materials.</p>
      <Link className='button-main mt-4' to={"/products/living-room"}>
        Find out more
      </Link>
    </div>
  );
}

export default HomeCta;
