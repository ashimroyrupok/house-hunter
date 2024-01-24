import { Link, Outlet } from "react-router-dom";

const DashLayout = () => {
  return (
    <div>
      <div className="bg-gray-200 px-11 py-4 mt-1">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-5">
          <div className="bg-white h-screen col-span-1 hidden lg:block p-4 w-full">
            <h1 className="text-center text-xl font-semibold">House Hunter</h1>

            <div className="mt-4">
              <ul className="flex-col justify-start ">
                <li>
                  <Link to={'/dashboard'}>
                    <button className="w-full px-2 py-3 bg-gray-100">
                      My House
                    </button>
                  </Link>
                </li>
                <li className="my-2">
                  <Link to={'/dashboard/addHouse'}>
                    <button className="w-full px-2 py-3 bg-gray-100">
                      Add New House
                    </button>
                  </Link>
                </li>
                <li className="my-2">
                  <Link to={'/'}>
                    <button className="w-full px-2 py-3 bg-gray-100">
                      Go to House
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          

          <div className="col-span-4 bg-white h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
