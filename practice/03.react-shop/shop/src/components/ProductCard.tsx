import { Product} from '../hooks/products'

type ProductProps = {
    product: Product | null;
}

export const ProductCard : React.FC<ProductProps> = ({product}) => {

    if (product == null) return null;

    return <div className='product-cart'>
        <a href={'/product/' + product.id}>    
                <img src={product.thumbnail} alt={product.title} />
            {product.title}
            --- {product.price}$
        </a>

    </div>
}
// console.log(ProductCard)