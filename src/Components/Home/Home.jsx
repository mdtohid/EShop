// import BottomBar from "../BottomBar/BottomBar";
import Brand from "../Brand/Brand";
import CallAction from "../CallAction/CallAction";
import Category from "../Category/Category";
import Feature from "../Feature/Feature";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import MainSlider from "../MainSlider/MainSlider";
// import Navbar from "../Navbar/Navbar";
import Newsletter from "../Newsletter/Newsletter";
import RecentProduct from "../RecentProduct/RecentProduct";
import Review from "../Review/Review";
// import Topbar from "../Topbar/Topbar";

const Home = () => {
    return (
        <div>
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
    );
};

export default Home;