function CartIcon({ itemCount }) {
  return <div>{itemCount > 0 && <span>{itemCount}</span>}</div>;
}

export default CartIcon;
