function Footer() {
  return (
    <div className='footer px-4 py-12 bg-slate-100 flex flex-row justify-between'>
      <div className='px-10 w-1/2'>
        <h1 className='text-4xl mb-4'>ILS</h1>
        <p className='text-sm'>
          Step into a world where style meets simplicity at our modern furniture
          shop, offering minimalist designs that elevate your living space.
          Experience the perfect blend of functionality and elegance with our
          handpicked selection of chic, contemporary pieces.
        </p>
      </div>
      <div className='flex flex-row self-end'>
        <div className='px-12'>
          <h3 className='text-xl mb-4'>Resources</h3>
          <ul className='text-sm'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className='px-12'>
          <h3 className='text-xl mb-4'>Categories</h3>
          <ul className='text-sm'>
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
