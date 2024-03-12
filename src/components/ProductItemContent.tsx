import { Link } from "react-router-dom";

interface ProductDetails {
  image: string;
  title: string;
  subtitle: string;
  price: number;
  currency: string;
  description: string;
  productQuantity: number;
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
  image,
  title,
  subtitle,
  price,
  currency,
  description,
  productQuantity,
  handleProductQuantityChange,
  handleAddToCart,
}: ProductDetails) {
  return (
    <div className='flex md:flex-row flex-col bg-white  p-2'>
      <div className='flex-1'>
        <img className='w-full' alt='placeholder image' src={image} />
      </div>
      <div className='p-5 flex-1'>
        <div className='section-border-bottom pb-6'>
          <h1 className='text-large mt-2'>{title}</h1>
        </div>
        <div className='product-section'>
          <p className='parag-text'>{subtitle}</p>
        </div>
        <div className='product-section'>
          <p className='text-base leading-4 text-gray-800 font-bold'>
            Price: {price} {currency}
          </p>
        </div>
        <p className='parag-text pt-3'>{description}</p>
        <div className='mb-5 mt-2'>
          <label htmlFor='quantity' className='parag-text'>
            Quantity:
          </label>
          <select
            name='quantity'
            id='quantitySelection'
            value={productQuantity}
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
            handleAddToCart(title, price, productQuantity, currency, image)
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
