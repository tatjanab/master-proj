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
        <div className='cursor-pointer bg-white p-2 shadow duration-150 hover:shadow-md'>
          <img
            className='w-full rounded-lg object-cover object-center'
            src={image}
            alt='product'
          />
          <p className='my-4 pl-4 font-bold text-gray-500'>{title}</p>
          <p className='mb-4 ml-4 text-xl font-semibold text-gray-800'>
            {currency} {price}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
