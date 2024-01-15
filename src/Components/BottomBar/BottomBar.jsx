import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BottomBar.css'
import { faHeart, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BottomBar = () => {
    return (
        <div className="bottom-bar px-4 md:px-14 py-3.5 bg-white">
            <div className="flex flex-col md:flex-row justify-between items-center gap-y-5 md:gap-0">
                <div className="">
                    <h3 className='text-3xl font-semibold text-[#ffb000] hover:text-black'>EShop</h3>
                </div>
                <div className="w-10/12 md:w-6/12">
                    <div className="relative w-full bg-transparent">
                        <input type="text" placeholder="Search Food" className="w-full ps-3 py-2 pe-13 rounded border border-[#ffb000]" />
                        <button className="absolute h-full px-4 right-0 text-[#ffb000] hover:text-white hover:bg-[#ffb000] rounded-r">
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
                <div className="">
                    <div className="flex gap-3">
                        <Link to='' className="btn hover:bg-[#ffb000] border border-[#ffb000] text-[#ffb000] hover:text-white">
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                            <span className='ms-1'>(0)</span>
                        </Link>
                        <Link to='' className="btn hover:bg-[#ffb000] border border-[#ffb000] text-[#ffb000] hover:text-white">
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                            <span className='ms-1'>(0)</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomBar;