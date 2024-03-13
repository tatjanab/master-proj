import { useState } from "react";
import ProductItemContent from "./ProductItemContent";
import { useToast } from "./ui/use-toast";

interface Card {
  title: string;
  subtitle: string;
  description?: string;
  price: number;
  currency: string;
  image: string;
}

function ProductItem({
  title,
  subtitle,
  description,
  price,
  currency,
  image,
}: Card) {
  const [productQuantity, setProductQuantity] = useState(1);
  const { toast } = useToast();

  const handleProductQuantityChange = (event: any): void => {
    const selectedQuantity = event.target.value;
    setProductQuantity(selectedQuantity);
    console.log(productQuantity);
  };

  const handleAddToCart = (
    productTitle: string,
    productPrice: number,
    productQuantity: number,
    productCurrency: string,
    productImageUrl: string,
  ): void => {
    toast({
      title: (
        <p>
          <span className='font-bold'>{productTitle} </span> added to the cart
        </p>
      ),
      description: (
        <a href='/cart' className='block mt-2 underline underline-offset-4'>
          Go to cart
        </a>
      ),
    });
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    let cartItem = {
      id: Math.random(),
      title: productTitle,
      price: productPrice,
      quantity: productQuantity,
      currency: productCurrency,
      image: productImageUrl,
      totalPrice: parseFloat((productPrice * productQuantity).toFixed(2)),
    };

    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <ProductItemContent
        image={image}
        title={title}
        subtitle={subtitle}
        price={price}
        currency={currency}
        description={description}
        productQuantity={productQuantity}
        handleProductQuantityChange={handleProductQuantityChange}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default ProductItem;
