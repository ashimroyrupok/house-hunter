import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
      <div>
        <Outlet></Outlet>
        <Footer></Footer>
        <Toaster />
      </div>
    );
};

export default MainLayout;