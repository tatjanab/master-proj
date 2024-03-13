import { useProductContext } from "../utilities/ProductContext";

interface ProductDetails {
  handleProductQuantityChange: (event: any) => void;
  handleAddToCart: (
    title: string,
    price: number,
    productQuantity: number,
    currency: string,
    image: string,
  ) => void;
}

function ProductItemContent({
  handleProductQuantityChange,
  handleAddToCart,
}: ProductDetails) {
  const product = useProductContext();

  return (
    <div className='flex md:flex-row flex-col bg-white  p-2'>
      <div className='flex-1'>
        <img className='w-full' alt='placeholder image' src={product.image} />
      </div>
      <div className='p-5 flex-1'>
        <div className='section-border-bottom pb-6'>
          <h1 className='text-large mt-2'>{product.title}</h1>
        </div>
        <div className='product-section'>
          <p className='parag-text'>{product.subtitle}</p>
        </div>
        <div className='product-section'>
          <p className='text-base leading-4 text-gray-800 font-bold'>
            Price: {product.price} {product.currency}
          </p>
        </div>
        <p className='parag-text pt-3'>{product.description}</p>
        <div className='mb-5 mt-2'>
          <label htmlFor='quantity' className='parag-text'>
            Quantity:
          </label>
          <select
            name='quantity'
            id='quantitySelection'
            value={product.quantity}
            onChange={handleProductQuantityChange}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        <button
          onClick={() =>
            handleAddToCart(
              product.title,
              product.price,
              product.quantity,
              product.currency,
              product.image,
            )
          }
          className='inline-block text-white bg-gray-800 px-4 py-2 rounded-sm focus:outline-none'
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItemContent;
