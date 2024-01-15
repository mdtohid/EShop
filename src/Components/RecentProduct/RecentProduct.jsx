import { faCartPlus, faHeart, faSearch, faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import useProducts from "../../Hooks/useProducts";

const RecentProduct = () => {

    const products = useProducts();

    const settings = {
        // dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='px-4 md:px-14 my-[30px]'>
            <div className='bg-white py-5 px-[30px] mb-[30px]'>
                <h1 className='w-6/12 text-4xl text-[#ffb000] font-bold'>Recent Product</h1>
            </div>

            <div className="productSlider">
                <Slider {...settings}>

                    {
                        products?.map((product, index) =>
                            <div key={index} className="paddingRight">
                                <div className="productTitle">
                                    <a href="#">Product Name</a>
                                    <div className="ratting">
                                        <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                                    </div>
                                </div>
                                <div className="productImage">
                                    <a href="product-detail.html">
                                        <img src={product.img} alt="Product Image" />
                                    </a>
                                    <div className="productAction">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></a>
                                    </div>
                                </div>
                                <div className="productPrice">
                                    <h3 className="text-2xl"><small>$</small>99</h3>
                                    <a className="btn" href=""
                                    ><FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
                                        Buy Now </a>
                                </div>
                            </div>
                        )}
                </Slider>
            </div>
        </div>
    );
};

export default RecentProduct;