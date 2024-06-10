const Restrauntcard= (props)=>{
  // imgUrl, title, starRating, deliveryTime, cuisines, locaion
    return(
      <div className="custom-card">
      <div className="mb-2"> 
        <img 
        src={props.imgUrl}
        // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
        />
      </div>
      <div className="px-2">
      <h5>{props.title}</h5>
      {/* <h5>Chinese Wok</h5> */}
      <div className="d-flex justify-content-between">
      <div>⭐{props.starRating}</div>
        {/* <div>⭐4.5</div> */}
        <div>{props.deliveryTime}min</div>
        {/* <div>40-45 min</div> */}
      </div>
      <div>{props.cuisines}</div>
      {/* <div>Chinese,Asian,Tibetan,Dessert</div> */}
      <div>{props.locaion}</div>
      {/* <div>Santachruz East</div> */}
      </div>
      </div>
    );
  };
  
  export default Restrauntcard;