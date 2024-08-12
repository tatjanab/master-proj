import { CartContext } from "../contexts/CartContext";
import { useContext, useState } from "react";

function ProductItem({ product }) {
  const [productQuantity, setProductQuantity] = useState(1);
  // const product = useProductContext();
  const { handleAddToCart } = useContext(CartContext);

  const handleProductQuantityChange = (event: any): void => {
    const selectedQuantity = event.target.value;
    setProductQuantity(selectedQuantity);
    console.log(productQuantity);
  };

  return (
    <div className='flex md:flex-row flex-col bg-white  p-2'>
      <div className='flex-1'>
        <img className='w-full' alt='placeholder image' src={product.image} />
      </div>
      <div className='p-5 flex-1'>
        <div className='product-section mb-2 uppercase underline'>
          <p>{product.subtitle}</p>
        </div>
        <h1 className='text-large mt-2'>{product.title}</h1>
        <div className='product-section mb-4'>
          <h2 className='text-md'>
            {product.price} {product.currency}
          </h2>
        </div>

        <hr className='my-5' />
        <h5 className='text-sm mb-5 uppercase'>Details</h5>
        <p>{product.description}</p>
        <div className='my-5 text-sm'>
          <label htmlFor='quantity'>Quantity:</label>
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
            handleAddToCart(
              parseInt(product.id),
              product.title,
              product.price,
              productQuantity,
              product.currency,
              product.image,
            )
          }
          className='button-main outline px-4 py-2'
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
