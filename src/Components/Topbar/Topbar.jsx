import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topbar = () => {
    return (
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
    );
};

export default Topbar;