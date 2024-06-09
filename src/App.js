import Logo from './assets/images/istockphoto-1069231126-612x612.jpg';
import './App.css'; 

import Header from'./components/Header';
import Body from './components/Body';
import Footer from'./components/Footer';

// const Header = () =>{
//   return(
//     <nav className="navbar p-0 navbar-expand-sm bg-light navbar-light">
//    <div className="container-fluid">
//      <a className="navbar-brand" href="#">
//        <img src={Logo} style={{width:"60px"}}/>
//      </a>
//      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//        <span className="navbar-toggler-icon"></span>
//      </button>
//      <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
//        <ul className="navbar-nav">
//          <li className="nav-item">
//           <a className="nav-link" href="#">Home🏠</a>
//          </li>
//          <li className="nav-item">
//            <a className="nav-link" href="#">About Us😊</a>
//          </li>
//          <li className="nav-item">
//            <a className="nav-link" href="#">Cart🛒</a>
//          </li>
//          <li className="nav-item">
//            <a className="nav-link" href="#">Contact Us📞</a>
//          </li>    
//        </ul>
//      </div>
//    </div>
//  </nav>
//   );
// };

// const Carousel = ()=>{
//   return(
//     <div>THis is carousel section</div>
//   );
// };

// const Filters = ()=>{
//   return(
//     <div>THis is Filters section</div>
//   );
// };

// const Searchbar = ()=>{
//   return(
//     <div>THis is Searchbar section</div>
//   );
// };

// const Restrauntcard= ()=>{
//   return(
//     <div>THis is Restrauntcard section</div>
//   );
// };


// const Cardconatiner = ()=>{
//   return(
//     <>
//     <p>THis is cardconatiner section</p>
//     <Restrauntcard/>
//     <Restrauntcard/>
//     <Restrauntcard/>
//     <Restrauntcard/>
//     <Restrauntcard/>
//     <Restrauntcard/>
//     </>
//   );
// };





// const Body = () =>{
//   return (
//     <>
//     <div className='text-center' >This is the Body component</div>
//     <Carousel/>
//     <div className='d-flex justify-content-between'>
//        <Filters/>
//        <Searchbar/>
//     </div>  
//     <Cardconatiner/>
//     </>
//   );
// };

// const Footer = () =>{
//   return(
//     <div className='text-center'>This is footer component</div>
//   );
// };



function App() {
  return (
  <>
<Header/>
<Body/>
<Footer/>
</>
  );
};

export default App;
