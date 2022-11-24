
import React from "react"
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/products";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

type ProductProps = {
}

export const Product : React.FC<ProductProps> = ({}) => {
    const {productId} = useParams();
    const product = useProduct(parseInt(productId || '1'))

    if (product == null) return null;

    return <div>
        {product.title}
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={product.images.length}
      >

        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <Slider>
          {product.images.map((productImg, i) => {
            return <Slide key={i} index={i}><img src={productImg} /></Slide>
          })}        
        </Slider>
      </CarouselProvider>
        </div>
} 