import { restaurantsArr, restaurantsArr } from "../Utils/Mockdata";
import RestaurantCards from "./RestaurantCards";
import { useState } from "react";

export const Body = () => {
const [restaurantsArr, setFilteredArray] = useState(restaurantsArr)
  return (
//     <div>
// <button onClick={()=>{
// const NewArray = restaurantsArr.filter((elem)=>{
//   if (elem.avgRating>4.0){
//     return true 
//   }else{
//     return false
//   }
// })
// setFilteredArray(NewArray)
// }}
   
//       </button>





  
  <div className="res-container">
      {setFilteredArray.map((elem) => {
        return <RestaurantCards resDetails={elem} key={elem.id} />;
      })}
</div>

    /* <RestaurantCards resDetails={restaurantsArr[0]} />
      <RestaurantCards resDetails={restaurantsArr[1]} />
      <RestaurantCards resDetails={restaurantsArr[2]} />
      <RestaurantCards resDetails={restaurantsArr[3]} />
      <RestaurantCards resDetails={restaurantsArr[4]} />
      <RestaurantCards resDetails={restaurantsArr[5]} />
      <RestaurantCards resDetails={restaurantsArr[6]} />
      <RestaurantCards resDetails={restaurantsArr[7]} />
      <RestaurantCards resDetails={restaurantsArr[8]} />
      <RestaurantCards resDetails={restaurantsArr[9]} />
      <RestaurantCards resDetails={restaurantsArr[10]} />
      <RestaurantCards resDetails={restaurantsArr[11]} />
      <RestaurantCards resDetails={restaurantsArr[12]} />
      <RestaurantCards resDetails={restaurantsArr[13]} />
      <RestaurantCards resDetails={restaurantsArr[14]} />
      <RestaurantCards resDetails={restaurantsArr[15]} />
      <RestaurantCards resDetails={restaurantsArr[17]} />
      <RestaurantCards resDetails={restaurantsArr[18]} />
      <RestaurantCards resDetails={restaurantsArr[19]} />
      <RestaurantCards resDetails={restaurantsArr[20]} />
      <RestaurantCards resDetails={restaurantsArr[21]} />
      <RestaurantCards resDetails={restaurantsArr[22]} />
      <RestaurantCards resDetails={restaurantsArr[23]} />
      <RestaurantCards resDetails={restaurantsArr[25]} />
      <RestaurantCards resDetails={restaurantsArr[26]} />
      <RestaurantCards resDetails={restaurantsArr[27]} />
      <RestaurantCards resDetails={restaurantsArr[28]} />
      <RestaurantCards resDetails={restaurantsArr[29]} />
      <RestaurantCards resDetails={restaurantsArr[30]} />
      <RestaurantCards resDetails={restaurantsArr[31]} />
      <RestaurantCards resDetails={restaurantsArr[32]} />
      <RestaurantCards resDetails={restaurantsArr[33]} />
      <RestaurantCards resDetails={restaurantsArr[34]} />
      <RestaurantCards resDetails={restaurantsArr[35]} />
      <RestaurantCards resDetails={restaurantsArr[36]} />
      <RestaurantCards resDetails={restaurantsArr[37]} />
      <RestaurantCards resDetails={restaurantsArr[38]} />
      <RestaurantCards resDetails={restaurantsArr[39]} />
     */

  );
};
