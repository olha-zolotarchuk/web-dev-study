import { Product } from "../hooks/products";

type ProductProps = {
  product: Product | null;
};

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  if (product == null) return null;

  return (
    <div className="product-cart">
      <a href={"/product/" + product.id}>
        <div className="thumbnail">
        <img src={product.thumbnail} alt={product.title} /></div> 
        <div className="title"> {product.title}</div>
        <div className="rating">{product.rating}</div>
        <div className="price">{product.price}$</div>
      </a>
    </div>
  );
};
// console.log(ProductCard)
