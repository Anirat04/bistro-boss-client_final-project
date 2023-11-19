import Banner from "./Home_components/Banner/Banner";
import CallUs from "./Home_components/CallUs/CallUs";
import FeaturedMenu from "./Home_components/FeaturedMenu/FeaturedMenu";
import FromOurMenu from "./Home_components/FromOurMenu/FromOurMenu";
import OnlineOrder from "./Home_components/OnlineOrder/OnlineOrder";
import Testimonial from "./Home_components/Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OnlineOrder></OnlineOrder>
            <FromOurMenu></FromOurMenu>
            <CallUs></CallUs>
            <FeaturedMenu></FeaturedMenu>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;