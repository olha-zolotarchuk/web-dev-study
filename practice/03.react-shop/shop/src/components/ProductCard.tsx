import { Product } from "../hooks/products";
import { Rating } from "../components/Rating";

type ProductProps = {
  product: Product | null;
};

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  if (product == null) return null;
  console.log(ProductCard)

  return (  
    <div className="product-cart">
      <a href={"/product/" + product.id}>
        <div className="thumbnail">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div>
          <div className="title"> {product.title}</div>
          <div className="rating">
            <Rating rating={product.rating} />
          </div>
        </div>
        <div className="price"><span className="dollar">$</span>{product.price}</div>
      </a>
    </div>
  );
};
