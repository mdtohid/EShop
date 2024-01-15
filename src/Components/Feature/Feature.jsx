import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faComment, faSyncAlt, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Feature.css'

const Feature = () => {
    return (
        <div className="feature px-4 md:px-14">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="featureCol">
                    <div className="featureContent">
                        <FontAwesomeIcon className="icon" icon={faCcMastercard}></FontAwesomeIcon>
                        <h2>Secure Payment</h2>
                        <p>Lorem ipsum dolor sit amet consectetur elit</p>
                    </div>
                </div>
                <div className="featureCol">
                    <div className="featureContent">
                        <FontAwesomeIcon className="icon" icon={faTruck}></FontAwesomeIcon>
                        <h2>Worldwide Delivery</h2>
                        <p>Lorem ipsum dolor sit amet consectetur elit</p>
                    </div>
                </div>
                <div className="featureCol">
                    <div className="featureContent">
                        <FontAwesomeIcon className="icon" icon={faSyncAlt}></FontAwesomeIcon>
                        <h2>90 Days Return</h2>
                        <p>Lorem ipsum dolor sit amet consectetur elit</p>
                    </div>
                </div>
                <div className="featureCol">
                    <div className="featureContent">
                        <FontAwesomeIcon className="icon" icon={faComment}></FontAwesomeIcon>
                        <h2>24/7 Support</h2>
                        <p>Lorem ipsum dolor sit amet consectetur elit</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;