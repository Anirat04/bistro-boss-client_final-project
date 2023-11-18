import Banner from "./Home_components/Banner/Banner";
import FromOurMenu from "./Home_components/FromOurMenu/FromOurMenu";
import OnlineOrder from "./Home_components/OnlineOrder/OnlineOrder";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OnlineOrder></OnlineOrder>
            <FromOurMenu></FromOurMenu>
        </div>
    );
};

export default Home;