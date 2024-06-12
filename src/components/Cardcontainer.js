import Restrauntcard from "./Restrauntcard";
const Cardconatiner = ()=>{
  const restaruntData=[
    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
      title:"Chinese Wok",
      starRating:"4.5",
      deliveryTime:"40-50",
      cuisines:"Chinese,Asian,Tibetan,Dessert",
      locaion:"Santacruz East"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
      title:"Pizza Hut",
      starRating:"3.9",
      deliveryTime:"30-35",
      cuisines:"Pizzas",
      locaion:"Phoneix Market City"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e2ej0ob56z47oylq9mkb",
      title:"UBQ BY Barbeque Nation",
      starRating:"4.0",
      deliveryTime:"40-55",
      cuisines:"North Indian,Barbeque,Biryani",
      locaion:"Bandra East"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/53f88d009d0528792249fb282ef2e17b",
      title:"Dabba Garam",
      starRating:"4.4",
      deliveryTime:"35-40",
      cuisines:"North Indians,Thalis",
      locaion:"Bandra East"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/4a8bc67d-8fe4-44db-be5d-1477086cc52b_32399.JPG",
      title:"McDonald's",
      starRating:"4.3",
      deliveryTime:"20-25",
      cuisines:"Burgers,Mac Meals,Fries",
      locaion:"Ghatkopar West"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c99751d54e4e1847186c62b3309c1327",
      title:"Big Bowl",
      starRating:"4.6",
      deliveryTime:"40-45",
      cuisines:"Chinese,Tibetan,North Indian",
      locaion:"Santacruz"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11",
      title:"The Belgian Waffle Co.",
      starRating:"4.3",
      deliveryTime:"50-55",
      cuisines:"Waffle,Desert",
      locaion:"Powai"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7aeb2bbff29d99d6e986240911ce0e71",
      title:"Persian Darbar",
      starRating:"4.2",
      deliveryTime:"40-55",
      cuisines:"North Indian,Biryani",
      locaion:"Bandra Kurla Complex"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lkpasnikcdavv852pwls",
      title:"Natural Ice Cream",
      starRating:"5",
      deliveryTime:"20-25",
      cuisines:"Ice Cream,Desert",
      locaion:"Ghatkopar Patel Chowk"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fvc0bn2hdmdqpcynfvdz",
      title:"Zaika Restaurant",
      starRating:"4.1",
      deliveryTime:"40-55",
      cuisines:"North Indian,Snacks",
      locaion:"Andheri"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b125bc1d2ebe5f5cfa217c075f96554f",
      title:"Dine 303",
      starRating:"4.0",
      deliveryTime:"45-50",
      cuisines:"North Indian,Chinese",
      locaion:"Ghatkopar West"
    },

        {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/78ed2991b24b1bbc00dfb122d4dcc585",
      title:"Spaghetti with Basil",
      starRating:"4.2",
      deliveryTime:"40-45",
      cuisines:"chinese",
      locaion:"Andheri"
    },

    {
      imgUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/qidrkxgwox9t2xidfdxs",
      title : "Urban Tadka",
      starRating : "4.5",
      deliveryTime : "40-45",
      cuisines : "Urban Tadka, Mughalai Biryani",
      location : "North India"
    },

{
  imgUrl : "https://b.zmtcdn.com/data/reviews_photos/801/6e42f1bfa8397d7105d9bc1276205801_1680257479.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
  title : "Kubec BistrocBar",
  starRating : "4.5",
  deliveryTime : "40-45",
  cuisines : "Chinese, Asian, Tibetan, Desserts",
  location : "Powai"
    },

{
  imgUrl : "https://t3.ftcdn.net/jpg/02/60/12/88/360_F_260128861_Q2ttKHoVw2VrmvItxyCVBnEyM1852MoJ.jpg",
  title : "Sangham Fast Food",
  starRating : "3",
  deliveryTime : "40-45",
  cuisines : " Asian, Tibetan, Desserts",
  location : "Worli"
    },

{
  imgUrl : "https://b.zmtcdn.com/data/reviews_photos/3cb/86fc2e79bd6f05c53064aafa016643cb_1535579441.jpg?fit=around|750:500&crop=750:500;*,*",
  title : "Bharat cafe",
  starRating : "4.5",
  deliveryTime : "40-45",
  cuisines : "punjabi Thali, North Indian Thali",
  location : "Ghatkopar(west)"
    }
  ]

    return(
      <div className="container d-flex flex-wrap gap-4">
      {
        restaruntData.map((restarunt)=>{
          return(
            <Restrauntcard
            imgUrl={restarunt?.imgUrl}
            title={restarunt?.title}
            starRating={restarunt?.starRating}
            deliveryTime={restarunt?.deliveryTime}
            cuisines={restarunt?.cuisines}
            locaion={restarunt?.locaion}
            />
      
          );
        })
      }
      
      </div>
    );
  };

  export default Cardconatiner;

