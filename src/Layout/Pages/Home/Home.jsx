import Banner from "./Home_components/Banner/Banner";
import CallUs from "./Home_components/CallUs/CallUs";
import FeaturedMenu from "./Home_components/FeaturedMenu/FeaturedMenu";
import FromOurMenu from "./Home_components/FromOurMenu/FromOurMenu";
import OnlineOrder from "./Home_components/OnlineOrder/OnlineOrder";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OnlineOrder></OnlineOrder>
            <FromOurMenu></FromOurMenu>
            <CallUs></CallUs>
            <FeaturedMenu></FeaturedMenu>
        </div>
    );
};

export default Home;