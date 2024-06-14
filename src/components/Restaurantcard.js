export const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
  

const Restrauntcard= ({cloudinaryImageId,name,avgRating,sla,cuisines,areaName})=>{
  // imgUrl, title, starRating, deliveryTime, cuisines, locaion
    return(
      <div className="custom-card">
      <div className="mb-2"> 
        <img 
        src={IMG_URL+cloudinaryImageId}
       />
      </div>
      <div className="px-2">
      <h5>{name}</h5>
      <div className="d-flex justify-content-between">
      <div>⭐{avgRating}</div>
        <div>{sla?.deliveryTime}min</div>
      </div>
      <div className="text-secondary">{cuisines.join(",")}</div>
      <div>{areaName}</div>
      </div>
      </div>
    );
  };
  
  export default Restrauntcard;