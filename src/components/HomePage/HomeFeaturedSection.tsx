import { IoIosArrowRoundForward } from "react-icons/io";

function HomeFeaturedSection() {
  return (
    <div className='px-6 my-10'>
      <h2 className='mb-5 text-3xl'>Discover inspiration</h2>
      <div className='flex flex-row justify-between'>
        <div className='featured-item mb-12'>
          <div className='img item-1'></div>
          <div className='item-title'>
            <h4>Outdoor seating</h4>
            <IoIosArrowRoundForward />
          </div>
        </div>
        <div className='featured-item mb-12'>
          <div className='img item-2'></div>
          <div className='item-title'>
            <h4>Living room</h4>
            <IoIosArrowRoundForward />
          </div>
        </div>
        <div className='featured-item mb-12'>
          <div className='img item-3'></div>
          <div className='item-title'>
            <h4>Pillows &amp; Throws</h4>
            <IoIosArrowRoundForward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFeaturedSection;
