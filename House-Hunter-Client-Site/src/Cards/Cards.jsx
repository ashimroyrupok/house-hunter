import { CiLocationOn } from "react-icons/ci";

const Cards = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ">
      <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md">
        <div className="relative">
          <img
            className="w-full h-64 object-cover"
            src="https://picsum.photos/200/200"
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
            <p>Apartment</p>
            <p className="flex justify-between items-center">
              <CiLocationOn className="text-2xl"></CiLocationOn>{" "}
              <span>Location </span>
            </p>
          </div>
          <h3 className="text-xl font-semibold mb-2">Product Sale</h3>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            bibendum auctor felis, vel consequat odio ullamcorper eu.
          </p>
          <div className="my-4">
            <div className="flex justify-between items-center gap-5 text-gray-400">
              <p>Bedroom: </p>
              <p>Bathroom: </p>
              <p>Room-size: </p>
            </div>
            <div className="flex justify-between items-center gap-5 text-gray-400">
              <p>: </p>
              <p>Bathroom: </p>
              <p>Room-size: </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
