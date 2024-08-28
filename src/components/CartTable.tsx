import { CiCircleRemove } from "react-icons/ci";

type CardTableProps = {
  title: string;
  price: number;
  currency: string;
  quantity: number;
  totalPrice: number;
  image: string;
  removeItemFromCart: any;
  setItemQuantity: any;
};

function CartTable({
  title,
  price,
  quantity,
  currency,
  totalPrice,
  image,
  removeItemFromCart,
  setItemQuantity,
}: CardTableProps) {
  // const { handleProductQuantityChange } = useContext(CartContext);

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
              value={quantity}
              onChange={(e) => setItemQuantity(title, e.target.value)}
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
