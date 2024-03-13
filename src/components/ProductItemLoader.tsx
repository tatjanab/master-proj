let ProductItemLoader = () => {
  return (
    <>
      <div className='mx-auto mb-2 w-full h-screen'>
        <div className='flex md:flex-row flex-col cursor-pointer bg-white p-2 duration-150 h-72'>
          <div className='product-image flex-1 image-lg'></div>
          <div className="flex-1 ml-3">
            <p className='text-line'></p>
            <p className='text-line'></p>
            <p className='text-line'></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItemLoader;
