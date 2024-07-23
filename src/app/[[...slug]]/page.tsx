import { useRouter } from "next/router";
import "../../assets/scss/main.scss";
import { ClientOnly } from "./client";

export function generateStaticParams() {
  //   const response = await fetch(
  //     "https://master-shop-53976-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json",
  //   );
  //   const categories = await response.json();
  //   const paths = categories.map((category) => ({
  //     slug: [category],
  //   }));
  const paths = [
    { slug: [""] },
    { slug: ["products", "outdoor"] },
    { slug: ["products", "bedroom"] },
    { slug: ["products", "living-room"] },
    { slug: ["cart"] },
    { slug: ["checkout"] },
  ];

  return paths;
}

export default function Page({ params }) {
  return <ClientOnly />;
}
