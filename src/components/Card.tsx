interface CardProps {
  title: string;
  subtitle?: string;
  description: string;
  price: number;
  currency: string;
  image: string;
}

let Card = ({ title, price, currency, image, subtitle }: CardProps) => {
  return (
    <>
      <div>
        <div className='cursor-pointer bg-white'>
          <img
            className='w-full mb-2 object-cover object-center'
            src={image}
            alt='product'
          />
          <p className='font-bold text-xs text-gray-500'>{title}</p>
          <p className='mb-4 text-xs font-semibold text-gray-800'>
            {currency} {price}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
