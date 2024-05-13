import { useEffect } from "react";
import { CiCircleRemove } from "react-icons/ci";

interface CardTableProps {
  title: string;
  price: number;
  currency: string;
  quantity: number;
  totalPrice: number;
  image: string;
  removeItemFromCart: any;
}

function CartTable({
  title,
  price,
  quantity,
  currency,
  totalPrice,
  image,
  removeItemFromCart,
}: CardTableProps) {
  useEffect(() => {}, [price]);

  return (
    <div className='table-row'>
      <div className='table-image'>
        <img src={image} alt={title} />
      </div>
      <div className='table-item'>
        <div className='table-left'>
          <h2>{title}</h2>
          <p>
            {price} {currency}
          </p>
        </div>
        <div className='table-right'>
          <div className='item-total'>
            {totalPrice} {currency}
          </div>
          <p className='item-quantity'>qty: {quantity}</p>
          <div>
            <button
              onClick={() => {
                removeItemFromCart(title);
              }}
              className='delete-btn mt-5'
            >
              <CiCircleRemove className='flex self-center mr-1' />{" "}
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
