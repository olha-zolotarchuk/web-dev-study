import { useEffect, useState } from "react"

export type Category = {
    category: string;   
}

export const useCategory = (Category: string) => {
    const [category, setCategories] = useState<string[] | null> (null)

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories/').then(async(r) => {
            setCategories(await r.json())
        })  
    }, [category])
    return category
}




