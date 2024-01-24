import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/Product/Product";

const Home = () => {
    // const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            {/* <h1>This is Home</h1> */}
            <Navbar></Navbar>
            <Product></Product>
        </div>
    );
};

export default Home;