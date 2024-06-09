import Carousel from "./Carousel";
import Filters from "./Filter";
import Searchbar from "./Searchbar";
import Cardconatiner from "./Cardcontainer";

const Body = () =>{
    return (
      <>
      <div className='text-center' >This is the Body component</div>
      <Carousel/>
      <div className='d-flex justify-content-between'>
         <Filters/>
         <Searchbar/>
      </div>  
      <Cardconatiner/>
      </>
    );
  };
  export default Body;