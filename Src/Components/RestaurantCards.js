

const RestaurantCards = ({ resDetails }) => {
  const { resName, cuisine, avgRating, delieveryTime, costfortwo, imgId } =
    resDetails;
  return (
    <div className="res-card">
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ imgId} />

      <h3>{resName}</h3>
      <h4> {cuisine}</h4>
      <h4>⭐{avgRating} Stars</h4>
      <h4>
        {delieveryTime}: Mins
         {/* {costfortwo}: $ 300 */}

      </h4>
    </div>
  );
};
export default RestaurantCards
