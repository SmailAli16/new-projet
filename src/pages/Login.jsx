import logo from "../assets/logo.svg";
import icon from "../assets/ph_lock-key-fill.svg";
import envlop from "../assets/ph_envelope-simple-fill.svg";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="main ml-[300px] mr-[300px] mt-10  gap-4 p-2 flex flex-col ">
        <div className="flex items-center m-auto ">
          <img src={logo} alt="" />
          <p class="text-left">devlinks</p>
        </div>
        <div className="  flex flex-col m-auto bg-base-200 p-10 rounded-lg shadow-md ">
          <h1 class="font-bold text-3xl mt-4 mb-4    text-left ">Login</h1>
          <spam className="text-gray-500 text-left mt-2 mb-2">
            Add your details below to get back into the app
          </spam>
          <label htmlFor="" className=" mb-0">
            Email Adress
          </label>
          <div className=" relative w-full ">
            <input
              type="text"
              placeholder="e.g.alex@email.com"
              class="input input-bordered w-full pl-8"
            />
            <img className=" absolute left-2 top-4" src={envlop} alt="" />
          </div>
          <label htmlFor="" className=" mt-4 ">
            {" "}
            Password
          </label>
          <div className=" relative w-full mt-2">
            <img src={icon} alt="" className=" absolute left-2 top-4" />
            <input
              type="password"
              placeholder="Enter your password"
              className=" input input-bordered w-full pl-8 "
            />
          </div>
          <button className="btn btn-primary mt-2">Login</button>
          <div className=" mb-10">
            <span className=" text-gray-500 mt-2 text-sm">
              Don't have an account?
            </span>
            <Link to="/Signup" className=" text-primary ml-12 mb-[30px]">
              Create account
            </Link>
          </div>

          {/* //Create account */}
        </div>
      </div>
    </>
  );
};

export default Login;
