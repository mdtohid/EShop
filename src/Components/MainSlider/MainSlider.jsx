import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MainSlider.css';
import { faChild, faFemale, faHome, faIcons, faMicrochip, faMobileAlt, faPlusSquare, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import slider1 from '../../assets/slider-1.jpg';
import slider2 from '../../assets/slider-2.jpg';
import slider3 from '../../assets/slider-3.jpg';
import category1 from '../../assets/category-1.jpg';
import category2 from '../../assets/category-2.jpg';
import Slider from 'react-slick';

const MainSlider = () => {

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="header px-4 md:px-14">
            <div className="flex flex-col md:flex-row md:h-[400px] md:gap-8">
                <div className="md:w-3/12">
                    <nav className="navbar">
                        <ul className="navbarNav">
                            <li className="">
                                <a className="" href="#"
                                >
                                    <FontAwesomeIcon className='icon' icon={faHome}></FontAwesomeIcon>
                                    Home
                                </a>
                            </li>
                            <li className="">
                                <a className="" href="#"
                                >
                                    <FontAwesomeIcon className='icon' icon={faShoppingBag}></FontAwesomeIcon>
                                    Best Selling
                                </a>
                            </li>
                            <li className="">
                                <a className="" href="#"
                                ><FontAwesomeIcon className='icon' icon={faPlusSquare}></FontAwesomeIcon>New Arrivals</a>
                            </li>
                            <li className="">
                                <a className="" href="#"
                                ><FontAwesomeIcon className='icon' icon={faFemale}></FontAwesomeIcon>Fashion & Beauty</a
                                >
                            </li>
                            <li className="">
                                <a className="" href="#"
                                ><FontAwesomeIcon className='icon' icon={faChild}></FontAwesomeIcon>Kids & Babies Clothes</a
                                >
                            </li>
                            <li className="">
                                <a className="" href="#"
                                ><FontAwesomeIcon className='icon' icon={faIcons}></FontAwesomeIcon>Men & Women Clothes</a
                                >
                            </li>
                            <li className="">
                                <a className="" href="#"
                                ><FontAwesomeIcon className='icon' icon={faMobileAlt}></FontAwesomeIcon>Gadgets & Accessories</a
                                >
                            </li>
                            <li className="">
                                <a className="" href="#"
                                ><FontAwesomeIcon className='icon' icon={faMicrochip}></FontAwesomeIcon>Electronics & Accessories</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="md:w-6/12">
                    <div className="headerSlider normalSlider md:h-[400px] overflow-hidden">
                        <Slider {...settings}>
                            <div className="headerSliderItem">
                                <img className='w-full' src={slider1} alt="Slider Image" />
                                <div className="headerSliderCaption">
                                    <a className="btn bg-white hover:bg-[#ffb000] text-[#ffb000] hover:text-white hover:border border-white" href=""
                                    >
                                        <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                            <div className="headerSliderItem">
                                <img className='w-full' src={slider2} alt="Slider Image" />
                                <div className="headerSliderCaption">
                                    <a className="btn bg-white hover:bg-[#ffb000] text-[#ffb000] hover:text-white hover:border border-white" href=""
                                    >
                                        <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                            <div className="headerSliderItem">
                                <img className='w-full' src={slider3} alt="Slider Image" />
                                <div className="headerSliderCaption">
                                    <a className="btn bg-white hover:bg-[#ffb000] text-[#ffb000] hover:text-white hover:border border-white" href=""
                                    ><FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="md:w-3/12">
                    <div className="headerImg">
                        <div className="imgItem">
                            <img src={category1} />
                            <a className="imgText" href="">
                                <p>Some text goes here that describes the image</p>
                            </a>
                        </div>
                        <div className="imgItem">
                            <img src={category2} />
                            <a className="imgText" href="">
                                <p>Some text goes here that describes the image</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSlider;