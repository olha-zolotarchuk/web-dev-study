import React from "react";
import PrettyRating, { IconsInterface } from "pretty-rating-react";
  import {
    faStar,
    faStarHalfAlt,
  } from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";

const colors = {
 star: ['#d9ad26', '#d9ad26', '#434b4d'],
};


  
  const icons: any = {
    star: {
      complete: faStar,
      half: faStarHalfAlt,
      empty: farStar,
    }
  };  

  type RatingProp = {
    rating: number;
  };
  

export const Rating: React.FC <RatingProp>= ({rating}) => (


   <PrettyRating value={rating} max={5} icons={icons.star} colors={colors.star} />

 
);