import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Components/Navbar/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import RecentProduct from './Components/RecentProduct/RecentProduct';
import Newsletter from './Components/Newsletter/Newsletter';
import CallAction from './Components/CallAction/CallAction';
import Category from './Components/Category/Category';
import Feature from './Components/Feature/Feature';
import Brand from './Components/Brand/Brand';
import MainSlider from './Components/MainSlider/MainSlider';
import Review from './Components/Review/Review';
import FeaturedProduct from './Components/FeaturedProduct/FeaturedProduct';
import BottomBar from './Components/BottomBar/BottomBar';

function App() {

  return (
    <div className='bg-[#f3f6ff]'>
      <div className='px-14 py-1 bg-[#fff9e6]'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-y-1.5'>
          <div className="">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className='ms-1'>contact.weepoka@email.com</span>
          </div>
          <div className="">
            <FontAwesomeIcon icon={faPhone} />
            <span className='ms-1'>+880 1606 104 415</span>
          </div>
        </div>
      </div>

      <Navbar></Navbar>

      <BottomBar></BottomBar>

      <MainSlider></MainSlider>

      <Brand></Brand>

      <Feature></Feature>

      <Category></Category>

      <CallAction></CallAction>

      <FeaturedProduct></FeaturedProduct>

      <Newsletter></Newsletter>

      <RecentProduct></RecentProduct>

      <Review></Review>
    </div>
  )
}

export default App
