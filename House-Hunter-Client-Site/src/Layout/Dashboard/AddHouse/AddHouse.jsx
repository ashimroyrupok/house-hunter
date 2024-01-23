import React from 'react';

const AddHouse = () => {
    const handleForm= async(e)=>{
        e.preventDefault();
        const form = e.target;
        const  houseName = form.houseName.value;
        const city = form.city.value;
        const address = form.address.value;
        const roomSize = form.roomSize.value;
        const bedRooms = form.bedRooms.value;
        const bathRoom = form.bathRoom.value;
        const mobile = form.mobile.value;
        const price= form.price.value;
        const image = form.image.files[0];
        const availability = form.availability.value;
        const data = {
          houseName,
          city,
          address,
          roomSize,
          bedRooms,
          bathRoom,
          mobile,
          price,
          image,
          availability,
        };
        // console.log(houseName, city, address, roomSize,bedRooms,bathRoom, mobile, price, image, availability);
        console.log(data);

    }
    return (
      <div className="bg-gray-300 p-5 h-screen">
        <h2 className="text-4xl font-bold text-center">Add a New House</h2>
        <div className="bg-gray-200 flex justify-center items-center  w-full p-5">
          <form onSubmit={handleForm} className="shadow-lg p-7 rounded-lg  bg-gray-300 w-[80%]">
            <div className="flex justify-between items-center gap-4">
              <div className="bg-white   ">
                <div className="relative bg-inherit">
                  <input
                    type="text"
                    id="username"
                    name="houseName"
                    className="peer bg-transparent h-10 w-[350px] rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder="Type inside me"
                  />
                  <label
                    htmlFor="username"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Type inside house name
                  </label>
                </div>
              </div>
              <div className="bg-white   ">
                <div className="relative bg-inherit">
                  <input
                    type="text"
                    id="username"
                    name="city"
                    className="peer bg-transparent h-10 w-[350px] rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder="Type inside me"
                  />
                  <label
                    htmlFor="username"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    City
                  </label>
                </div>
              </div>
            </div>
            <div className="flex my-4 justify-between items-center gap-4">
              <div className="bg-white   ">
                <div className="relative bg-inherit">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="peer bg-transparent h-10 w-[350px] rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder="Type inside me"
                  />
                  <label
                    htmlFor="address"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Type inside house Address
                  </label>
                </div>
              </div>
              <div className="bg-white   ">
                <div className="relative bg-inherit">
                  <input
                    type="number"
                    id="RoomSize"
                    name="roomSize"
                    className="peer bg-transparent h-10 w-[350px] rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder="Type inside me"
                  />
                  <label
                    htmlFor="RoomSize"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Enter Room sq.ft
                  </label>
                </div>
              </div>
            </div>
            <div className="flex my-4 justify-between items-center gap-4">
              <div className="bg-white   ">
                <div className="relative bg-inherit">
                  <input
                    type="number"
                    id="bedRooms"
                    name="bedRooms"
                    className="peer bg-transparent h-10 w-[350px] rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder="inside bed rooms numbers"
                  />
                  <label
                    htmlFor="bedRooms"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Bedrooms
                  </label>
                </div>
              </div>
              <div className="bg-white   ">
                <div className="relative bg-inherit">
                  <input
                    type="number"
                    id="RoomSize"
                    name="bathRoom"
                    className="peer bg-transparent h-10 w-[350px] rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder="Type inside me"
                  />
                  <label
                    htmlFor="RoomSize"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Enter Bathroom Numbers
                  </label>
                </div>
              </div>
            </div>
            <div className="flex my-4 justify-between items-center gap-4">
              <div className="bg-white   ">
                <div className="relative bg-inherit">
                  <input
                    type="file"
                    id="image"
                    name="image"
                    className="peer bg-transparent h-10 w-[350px] rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder="inside bed rooms numbers"
                  />
                </div>
              </div>
              <div className="bg-white   ">
                <div className="relative bg-inherit">
                  <select
                    type="availability "
                    id="availability "
                    name="availability "
                    className="peer bg-transparent h-10 w-[350px] rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder="Type inside me"
                  >
                    <option disabled selected value="">
                      {" "}
                      availability
                    </option>
                    <option value="available"> available</option>
                    <option value=" notAvailable"> notAvailable</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex my-4 justify-between items-center gap-4">
              <div className="bg-white   ">
                <div className="relative bg-inherit">
                  <input
                    type="number"
                    id="mobile"
                    name="mobile"
                    className="peer bg-transparent h-10 w-[350px] rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder="inside bed rooms numbers"
                  />
                  <label
                    htmlFor="mobile"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Contact Number
                  </label>
                </div>
              </div>
              <div className="bg-white   ">
                <div className="relative bg-inherit">
                  <input
                    type="number"
                    id="price"
                    name="price"
                    className="peer bg-transparent h-10 w-[350px] rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder="Type inside me"
                  />
                  <label
                    htmlFor="price"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Rent per month
                  </label>
                </div>
              </div>
            </div>

            <textarea placeholder='type here description....' className='w-[80%] pl-3 pt-4' name="description" id="" cols="30" rows="5"></textarea>

                <button className='w-full py-3 px-6 my-4 text-white rounded-md bg-sky-700'>Submit</button>
          </form>
        </div>
      </div>
    );
};

export default AddHouse;