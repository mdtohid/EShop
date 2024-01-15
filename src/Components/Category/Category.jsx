import './Category.css'
import category3 from '../../assets/category-3.jpg';
import category4 from '../../assets/category-4.jpg';
import category5 from '../../assets/category-5.jpg';
import category6 from '../../assets/category-6.jpg';
import category7 from '../../assets/category-7.jpg';
import category8 from '../../assets/category-8.jpg';

const Category = () => {
    return (
        <div className="px-4 md:px-14 category">
            <div className='grid grid-cols-1 md:grid-cols-4 md:gap-4'>
                <div className="categoryItems">
                    <div className="categoryItem ">
                        <img src={category3} />
                        <a className="categoryName" href="">
                            <p>Some text goes here that describes the image</p>
                        </a>
                    </div>
                </div>
                <div className="categoryItems">
                    <div className="categoryItem !h-2/3 ">
                        <img src={category4} />
                        <a className="categoryName" href="">
                            <p>Some text goes here that describes the image</p>
                        </a>
                    </div>
                    <div className="categoryItem !h-1/3 ">
                        <img src={category5} />
                        <a className="categoryName" href="">
                            <p>Some text goes here that describes the image</p>
                        </a>
                    </div>
                </div>
                <div className="categoryItems">
                    <div className="categoryItem !h-1/3 ">
                        <img src={category6} />
                        <a className="categoryName" href="">
                            <p>Some text goes here that describes the image</p>
                        </a>
                    </div>
                    <div className="categoryItem !h-2/3 ">
                        <img src={category7} />
                        <a className="categoryName" href="">
                            <p>Some text goes here that describes the image</p>
                        </a>
                    </div>
                </div>
                <div className="categoryItems">
                    <div className="categoryItem ">
                        <img src={category8} />
                        <a className="categoryName" href="">
                            <p>Some text goes here that describes the image</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;