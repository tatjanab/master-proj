import { useContext } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { CartContext } from "../contexts/CartContext";

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
  const { handleProductQuantityChange, productQuantity } =
    useContext(CartContext);

  console.log(handleProductQuantityChange);
  console.log("quantity " + productQuantity);

  const setProductQuantityChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    title: string,
  ) => handleProductQuantityChange(e, title);

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
          <div className='my-5 text-sm'>
            <label htmlFor='quantity'>Quantity:</label>
            <select
              name='quantity'
              id='quantitySelection'
              value={productQuantity}
              onChange={setProductQuantityChange}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
          {/* <p className='item-quantity'>qty: {quantity}</p> */}
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
