import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Pages/Shared/NavBar/NavBar";
import Footer from "./Pages/Shared/Footer/Footer";

const Layout = () => {
    const location = useLocation()
    const noHeaderFooterLogin = location.pathname.includes('login')
    const noHeaderFooterRegister = location.pathname.includes('register')
    return (
        <div>
            { noHeaderFooterLogin || noHeaderFooterRegister || <NavBar></NavBar>}
            <Outlet></Outlet>
            { noHeaderFooterLogin || noHeaderFooterRegister || <Footer></Footer>}
        </div>
    );
};

export default Layout;