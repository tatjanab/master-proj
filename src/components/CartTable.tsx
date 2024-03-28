import { useEffect } from "react";
import { TrashIcon } from "lucide-react";
import { FiTrash } from "react-icons/fi";

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
          <div className='table-item-details'>
            <p className='item-quantity'>qty: {quantity}</p> &nbsp; | &nbsp;
            <p className='item-price'>
              {price} {currency}
            </p>
          </div>
        </div>
        <div className='table-right'>
          <div className='item-total'>
            {totalPrice} {currency}
          </div>
          <div>
            <button
              onClick={() => removeItemFromCart(title)}
              className='delete-btn'
            >
              <FiTrash className='flex self-center mr-1' /> <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
