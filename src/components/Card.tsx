import { Product } from "../types/ProductType";

type CardProps = {
  product: Product;
};

let Card = ({ product }: CardProps) => {
  return (
    <>
      <div>
        <div className='cursor-pointer bg-white'>
          <img
            className='w-full mb-2 object-cover object-center'
            src={product.image}
            alt='product'
          />
          <p className='font-bold text-xs text-gray-500'>{product.title}</p>
          <p className='mb-4 text-xs font-semibold text-gray-800'>
            {product.currency} {product.price}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
