import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
// import RecentProduct from './Components/RecentProduct/RecentProduct';
// import Newsletter from './Components/Newsletter/Newsletter';
// import CallAction from './Components/CallAction/CallAction';
// import Category from './Components/Category/Category';
// import Feature from './Components/Feature/Feature';
// import Brand from './Components/Brand/Brand';
// import MainSlider from './Components/MainSlider/MainSlider';
// import Review from './Components/Review/Review';
// import FeaturedProduct from './Components/FeaturedProduct/FeaturedProduct';
import BottomBar from './Components/BottomBar/BottomBar';
import { Outlet } from 'react-router';
import Topbar from './Components/Topbar/Topbar';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <div className='bg-[#f3f6ff]'>
      <Topbar></Topbar>

      <Navbar></Navbar>

      <BottomBar></BottomBar>
      <Outlet />
    </div>
  )
}

export default App
