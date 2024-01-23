import { IoMdMenu, IoMdNotificationsOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Cards from "../../Cards/Cards";

const Product = () => {
  const axiosPublic = UseAxiosPublic();

//   const { data = [], refetch: dataFetch } = useQuery({
//     queryKey: [user?.email],
//     queryFn: async () => {
//       const res = await axiosPublic.get(`taskData/${user?.email}`);
//       return res.data;
//     },
//   });

  //


  //  console.log(tasks);
  return (
    <div className=" py-5">
      <div className="border-b-2 px-5 py-3 w-full">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="px-4">
            <form className="flex   mx-auto flex-col md:flex-row gap-3">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search by House name"
                  className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
                />
                <button
                  type="submit"
                  className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
                >
                  Search
                </button>
              </div>
              <select
                id="pricingType"
                name="priceFilter"
                className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
              >
                <option value="all" selected="">
                  All
                </option>
                <option value="asc">Low to High</option>
                <option value="dsc">High to Low</option>
              </select>
            </form>
          </div>
          {/*  */}
          <div className="flex gap-3 mt-3 lg:mt-0 justify-between items-center">
            <select
              id="pricingType"
              name="priceFilter"
              className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
            >
              <option disabled selected className="text-gray-300" value="all">
                Search by City
              </option>
              <option value="asc">Low to High</option>
              <option value="dsc">High to Low</option>
            </select>
            <select
              id="room"
              name="room"
              className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
            >
              <option disabled selected className="text-gray-300" value="all">
                By room Size
              </option>
              <option value="asc">123</option>
            </select>
            <select
              id="pricingType"
              name="priceFilter"
              className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
            >
              <option disabled selected className="text-gray-300" value="all">
                Search by Bedroom
              </option>
              <option value="asc">2</option>
              <option value="dsc">3</option>
            </select>
            <select
              id="pricingType"
              name="priceFilter"
              className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
            >
              <option disabled selected className="text-gray-300" value="all">
                Search by Bathroom
              </option>
              <option value="asc">1</option>
              <option value="dsc">2</option>
            </select>
          </div>
        </div>
      </div>

      <div>
      
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Product;
