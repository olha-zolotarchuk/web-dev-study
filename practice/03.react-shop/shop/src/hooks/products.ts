import { useEffect, useState } from "react"

export type Product = {
    id: string;
    title: string;
    thumbnail: string;
    price: number;
    images: string[];
}

export const useProduct = (productId: number): Product | null => {
    const [product, setProduct] = useState<Product | null> (null)


    useEffect(() => {
        fetch('https://dummyjson.com/products/' + productId).then(async(r) => {
            setProduct(await r.json())
        })  
    }, [productId])
    return product
}
