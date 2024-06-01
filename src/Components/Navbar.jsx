import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then().catch();
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Babui Pakhir Basha </a>
      </div>
      <div className="flex-none gap-2">
        <div className=" ">
          <NavLink className="mr-4" to="/">
            Home
          </NavLink>
          <NavLink to="/apartment">Apartment</NavLink>
        </div>
        <div className="dropdown dropdown-end">
          {user ? (
            <div>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Username</a>
                </li>
                <li>
                  <a>Dashboard</a>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline btn-secondary"
                  >
                    {" "}
                    Logout{" "}
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link to="/login">
                <button className="btn "> Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
