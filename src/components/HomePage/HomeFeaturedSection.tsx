import { IoIosArrowRoundForward } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";

function HomeFeaturedSection() {
  return (
    <div className='px-6 my-10'>
      <Carousel className='flex flex-col'>
        <div className='flex flex-row justify-between'>
          <h2 className='mb-5 md:text-3xl text-md'>Discover inspiration</h2>
          <div>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <CarouselContent>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
            <div className='featured-item md:h-1/2 h-screen mb-12'>
              <div className='img item-1'></div>
              <div className='item-title'>
                <h4>Outdoor seating</h4>
                <IoIosArrowRoundForward />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
            <div className='featured-item md:h-1/2 h-screen mb-12'>
              <div className='img item-2'></div>
              <div className='item-title'>
                <h4>Living room</h4>
                <IoIosArrowRoundForward />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
            <div className='featured-item md:h-1/2 h-screen mb-12'>
              <div className='img item-3'></div>
              <div className='item-title'>
                <h4>Pillows &amp; Throws</h4>
                <IoIosArrowRoundForward />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
            <div className='featured-item md:h-1/2 h-screen mb-12'>
              <div className='img item-4'></div>
              <div className='item-title'>
                <h4>Bedroom</h4>
                <IoIosArrowRoundForward />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
            <div className='featured-item md:h-1/2 h-screen mb-12'>
              <div className='img item-5'></div>
              <div className='item-title'>
                <h4>Lighting</h4>
                <IoIosArrowRoundForward />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      {/* <div className='flex flex-row justify-between'>
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
      </div> */}
    </div>
  );
}

export default HomeFeaturedSection;
