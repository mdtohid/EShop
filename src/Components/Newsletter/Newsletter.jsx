
const Newsletter = () => {
    return (
        <div className='bg-[#ffb000] flex flex-col md:flex-row gap-y-5 justify-between py-8 px-4 md:px-14 my-[30px]'>
            <h1 className='text-white text-4xl font-bold text-center md:text-left'>Subscribe Our Newsletter</h1>

            <div className="relative md:w-4/12 bg-transparent">
                <input type="text" placeholder="Your Email Here" className="w-full ps-[15px] py-2 pe-20 rounded-lg focus:outline-[#F99F1C]" />
                <button className="bg-[#ffb000] hover:bg-black border border-1 border-white rounded absolute h-full px-[15px] right-0 text-white hover:text-[#ffb000]">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Newsletter;