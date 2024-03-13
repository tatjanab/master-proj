import { useEffect } from "react";

interface CardTableProps {
  title: string;
  price: number;
  currency: string;
  quantity: number;
  totalPrice: number;
  image: string;
}

function CartTable({
  title,
  price,
  quantity,
  currency,
  totalPrice,
  image,
}: CardTableProps) {
  useEffect(() => {}, [price]);

  return (
    <div className='table-row grow'>
      <div className='table-image'>
        <img src={image} alt={title} />
      </div>
      <div className='table-item'>
        <div className='table-item-header'>
          <h2>{title}</h2>
          <div className='item-total'>
            {totalPrice} {currency}
          </div>
        </div>
        <div className='table-item-details'>
          <p className='item-quantity'>qty: {quantity}</p> &nbsp; | &nbsp;
          <p className='item-price'>
            {price} {currency}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
