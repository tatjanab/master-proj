function Footer() {
  return (
    <div className='footer px-4 py-12 bg-slate-100 flex md:flex-row flex-col justify-between'>
      <div className='md:px-10 px-2 md:w-1/2 w-full md:mb-0 mb-3'>
        <h1 className='md:text-4xl text-md mb-4'>ILS</h1>
        <p className='md:text-sm text-xs'>
          Step into a world where style meets simplicity at our modern furniture
          shop, offering minimalist designs that elevate your living space.
          Experience the perfect blend of functionality and elegance with our
          handpicked selection of chic, contemporary pieces.
        </p>
      </div>
      <div className='flex md:flex-row flex-col md:self-end '>
        <div className='md:px-10 px-2 md:mb-0 mb-3'>
          <h3 className='md:text-xl text-md md:mb-4 mb-2'>Resources</h3>
          <ul className='text-sm flex flex-row md:flex-col justify-between'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className='md:px-10 px-2'>
          <h3 className='md:text-xl text-md md:mb-4 mb-2'>Categories</h3>
          <ul className='text-sm flex flex-row md:flex-col justify-between'>
            <li>Bedroom</li>
            <li>Living room</li>
            <li>Kids room</li>
            <li>Lighting</li>
            <li>Pillows &amp; Throws</li>
            <li>Rugs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
