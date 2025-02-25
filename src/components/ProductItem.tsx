import { useState } from "react";
import { memo } from "react";
import { useCartStore } from "../stores/cartStore";
import { useToast } from "../ui/use-toast";
import { CartItem } from "../types/CartType";

const ProductItem = memo(function ProductItem({
  product,
}: {
  product: CartItem;
}) {
  const [productQuantity, setProductQuantity] = useState(1);
  const handleAddToCart = useCartStore((state) => state.handleAddToCart);

  const handleProductQuantityChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setProductQuantity(Number(event.target.value)); // Ensure quantity is a number
  };

  const { toast } = useToast();

  const onAddToCart = () => {
    // Pass updated quantity when adding to cart
    handleAddToCart({
      ...product,
      quantity: productQuantity,
      totalPrice: parseFloat((product.price * productQuantity).toFixed(2)), // Ensure total price updates correctly
    });
    toast({
      title: (
        <div>
          <p>
            <span className='font-bold'>{product.title}</span> added to the cart
          </p>
          <p>Quantity: {productQuantity}</p>
        </div>
      ),
      description: (
        <a href='/cart' className='mt-2 block underline underline-offset-4'>
          Go to cart
        </a>
      ),
    });
  };

  return (
    <div className='flex flex-col bg-white p-2 md:flex-row'>
      <div className='flex-1'>
        <img className='w-full' alt='placeholder image' src={product.image} />
      </div>
      <div className='flex-1 p-5'>
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
        <h5 className='mb-5 text-sm uppercase'>Details</h5>
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
          onClick={() => onAddToCart()}
          className='button-main px-4 py-2 outline'
        >
          Add to cart
        </button>
      </div>
    </div>
  );
});

export default ProductItem;
