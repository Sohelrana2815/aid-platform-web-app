import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="h-12 bg-black text-white p-2">Better Tomorrow</div>
      <div className="h-10 bg-base-200 hidden  lg:block">
        <div className="flex justify-evenly py-1">
          <p>
            example@gmail.com <span className="ml-6">+880123456789</span>
          </p>
          <p>f t i x l</p>
        </div>
      </div>

      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
