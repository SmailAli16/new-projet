import logo from "../assets/logo.svg";
import icon from "../assets/ph_lock-key-fill.svg";
import envlop from "../assets/ph_envelope-simple-fill.svg";
import { Link } from "react-router-dom";

export const Create = () => {
  return (
    <>
      <div className=" w-fit mt-[100px] flex items-center text-center m-auto mb-10">
        <img src={logo} alt="" className="  " />
        <p class="text-center ">devlinks</p>
      </div>
      <div className="main m-auto  gap-4 p-2 flex flex-col bg-base-200 rounded-lg shadow-md w-[400px] ">
        <div className=" flex flex-col m-auto">
          <h1 class="font-bold text-3xl mt-1 mb-1    text-left ">
            Create account
          </h1>
          <spam className=" text-neutral text-left mt-1 mb-1">
            Let's get you started sharing your links!
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
            Your Password
          </label>
          <div className=" relative w-full mt-2">
            <img src={icon} alt="" className=" absolute left-2 top-4" />
            <input
              type="password"
              placeholder="At least 8 characters"
              className=" input input-bordered w-full pl-8 "
            />
          </div>
          <label htmlFor="" className=" mt-2 ">
            {" "}
            Confirm Password
          </label>
          <div className=" relative w-full mt-2">
            <img src={icon} alt="" className=" absolute left-2 top-4" />
            <input
              type="password"
              placeholder="Confirm your password"
              className=" input input-bordered w-full pl-8 "
            />
          </div>
          <span className=" text-sm text-neutral">
            Password must contain at least 8 characters
          </span>
          <button className="btn btn-primary mt-2">create a counte</button>
          <div className="link">
            <span>Already have an account? </span>
            <Link to="/" className=" text-primary">
              {" "}
              Login
            </Link>
          </div>

          {/* //Create account */}
        </div>
      </div>
    </>
  );
};

export default Create;
