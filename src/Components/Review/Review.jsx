import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import review1 from '../../assets/review-1.jpg';
import review2 from '../../assets/review-2.jpg';
import review3 from '../../assets/review-3.jpg';
import './Review.css'

const Review = () => {
    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <div className="review px-4 md:px-14 mb-[30px]">
                <div className="review-slider normalSlider">
                    <Slider {...settings}>
                        <div className="px-[10px]">
                            <div className="review-slider-item">
                                <div className="review-img">
                                    <img src={review1} alt="Image" />
                                </div>
                                <div className="review-text">
                                    <h2>Customer Name</h2>
                                    <h3>Profession</h3>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="px-[10px]">
                            <div className="review-slider-item">
                                <div className="review-img">
                                    <img src={review2} alt="Image" />
                                </div>
                                <div className="review-text">
                                    <h2>Customer Name</h2>
                                    <h3>Profession</h3>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="px-[10px]">
                            <div className="review-slider-item">
                                <div className="review-img">
                                    <img src={review3} alt="Image" />
                                </div>
                                <div className="review-text">
                                    <h2>Customer Name</h2>
                                    <h3>Profession</h3>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
        </div>
    );
};

export default Review;