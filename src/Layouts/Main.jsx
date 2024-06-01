import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Main = () => {
  return (
    <div>
      <div className="container w-10/12 mx-auto">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
