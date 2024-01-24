import { CiLocationOn } from "react-icons/ci";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Cards = ({ searchValue }) => {
  const axiosPublic = UseAxiosPublic();

  const { data = [], refetch } = useQuery({
    queryKey: ["houses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/houses");
      return res.data;
    },
  });
  console.log(data);

  return (
    <div className="grid px-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 ">
      {data
        ?.filter((item) => {
          return !searchValue
            ? item
            : item.houseName.toLowerCase().includes(searchValue?.toLowerCase());
        })
        .map((item) => (
          <div
            key={item._id}
            className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md"
          >
            <div className="relative">
              <img
                className="w-full h-64 object-cover"
                src={item?.image}
                alt="Image"
              />
              <div className="absolute top-0 right-0">
                <div className="w-32 h-8 absolute top-4 -right-8">
                  <div className="h-full w-full bg-red-500 text-white text-center leading-8 font-semibold transform rotate-45">
                    SALE
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center gap-5 text-gray-400">
                <p> {item?.houseName} </p>
                <p className="flex justify-between items-center">
                  <CiLocationOn className="text-2xl"></CiLocationOn>{" "}
                  <span> {item?.city} </span>
                </p>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {" "}
                {item?.houseName}{" "}
              </h3>
              <p className="text-gray-700 text-base">{item?.description}</p>
              <div className="my-4 w-full">
                <div className="flex justify-between items-center  text-gray-400">
                  <p>room: {item?.bedRooms} </p>
                  <p>Bathroom: {item?.bathRoom} </p>
                  <p>Room-size: {item?.roomSize} </p>
                </div>
                <div className="flex justify-between items-center gap-5 text-gray-400">
                  <p className="text-green-400"> {item?.availability} </p>
                  <p>Prize: {item?.price} </p>
                  <p>Address: {item?.address} </p>
                </div>
              </div>
              <div className="flex justify-end items-end w-full">
                <button className="px-4 py-3 text-white bg-sky-600">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cards;
