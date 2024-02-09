import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import phProfil from "../assets/ph-profil.svg";
import phLink from "../assets/ph_link-bold.svg";
import Flesh from "../assets/flesh.svg";
import link from "../assets/link.svg";
import youtub from "../assets/youtub.svg";
import Arrow from "./linkarraw";
import Ellips from "../assets/Ellipse 3.svg";
import image from "../assets/imag.svg";
import Github from "./githubican";
import { useState } from "react";
import ph from "../assets/ph_link-bold.svg";
import Youtube from "../pages/youtubican";
import Facbook from "../pages/facbook";

const ActiveProfil = () => {
  const [list, setList] = useState([]);

  return (
    <div className=" bg-base-100 p-2  ">
      <div className=" w-full p-2">
        <div className=" p-2 mb-6  rounded-lg flex justify-between hover:bg-base-300 shadow-md  w-full h-20 bg-base-200 ">
          <div className=" ml-4 flex items-center ">
            <img src={logo} alt="" />
            <p class="text-left">devlinks</p>
          </div>
          <div className="flex  gap-1 items-center ">
            <Link
              to="#"
              className=" btn btn-outline btn-primary border bg- flex items-center gap-2 text-basse-300  "
            >
              <img src={phLink} alt="" />
              Link
            </Link>
            <div>
              <div className=" btn btn-outline btn-primary flex items-center ml-10">
                <img src={phProfil} alt="" />
                <p>Profile Details</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="btn btn-outline text-primary"> Preview</button>
          </div>
        </div>
        <article className="flex gap-4">
          <div className=" h-fit basis-1/3">
            <div className=" rounded-lg bg-base-200  border h-screen flex items-center m-auto justify-center">
              <div className=" flex  flex-col items-center justify-center my-auto relative ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="308"
                  height="632"
                  viewBox="0 0 308 632"
                  fill="none"
                >
                  <path
                    d="M1 54.5C1 24.9528 24.9528 1 54.5 1H253.5C283.047 1 307 24.9528 307 54.5V577.5C307 607.047 283.047 631 253.5 631H54.5C24.9528 631 1 607.047 1 577.5V54.5Z"
                    stroke="#737373"
                  />
                </svg>
                <svg
                  className=" absolute  "
                  xmlns="http://www.w3.org/2000/svg"
                  width="286"
                  height="612"
                  viewBox="0 0 286 612"
                  fill="none"
                >
                  <path
                    d="M1 45.5C1 20.9233 20.9233 1 45.5 1H69.5C75.8513 1 81 6.14873 81 12.5C81 20.5081 87.4919 27 95.5 27H190.5C198.508 27 205 20.5081 205 12.5C205 6.14873 210.149 1 216.5 1H240.5C265.077 1 285 20.9233 285 45.5V566.5C285 591.077 265.077 611 240.5 611H45.5C20.9233 611 1 591.077 1 566.5V45.5Z"
                    fill="white"
                    stroke="#737373"
                  />
                </svg>
                <div className=" absolute top-1 h-[300px] w-140 flex flex-col justify-around gap">
                  <img src={Ellips} alt="" className=" left-1" />
                </div>

                <div className=" absolute top-64 bg-base-300 h-4 w-40 rounded-xl "></div>
                <div className=" absolute top-[300px] bg-base-300 h-4 w-20 rounded-xl "></div>
                <div className="flex flex-col absolute top-[400px] gap-4">
                  <button className=" flex justify-between btn bg-black text-base-100  hover:bg-gray-800 h-[20px]  w-[250px]">
                    <div className="flex items-center gap-2">
                      <Github src={Github} alt="" />
                      GitHub
                    </div>
                    <Arrow />
                  </button>
                  <button className="btn flex justify-between bg-red-500 text-white hover:bg-red-800 ">
                    <div className=" flex items-center gap-2">
                      <Youtube src={youtub} alt="" />
                      YouTube
                    </div>
                    <img src={Flesh} alt="" />
                  </button>
                  <button className="btn flex justify-between bg-blue-600 text-white hover:bg-blue-900">
                    <div className="flex items-center gap-2">
                      <img src={link} alt="" />
                      LinkedIn
                    </div>
                    <img src={Flesh} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <article className=" bg-base-300 h-screen basis-2/3 w-full rounded-lg flex  items-center ">
            <div className=" bg-base-200 border rounded-2xl p-10   w-full h-screen flex flex-col gap-1  ">
              <h1 className=" my-10 font-bold text-5xl">
                Customize your links
                
              </h1>
              <p className=" text-neutral text-xl">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
              <button
                onClick={() => {
                  const oldList = [...list];
                  oldList.push({ text: "" });
                  setList(oldList);
                }}
                className=" m-3  justify-center shadow-lg shadow-gray-200 px-[25px] bg-white py-2 rounded-lg border-2 border-blue-500 flex text-blue-500 hover:text-white hover:bg-blue-500 transition-all duration-300"
              >
                + Add New Link
              </button>
              {list.length > 0 && (
                <div>
                  {list.map((element, i) => {
                    return (
                      <div>
                        <div className="flex justify-between ">
                          <p className=" gap-3 flex justify-between ">
                            <span>=</span>
                            <span>Link </span>
                            <p>#{i + 1}</p>
                          </p>
                          <button className="btn btn-neutral btn-outline ">
                            Remove
                          </button>
                        </div>
                        <div className=" flex flex-col">
                          <label htmlFor="" className=" text-lg">
                            {" "}
                            Platform
                          </label>
                          <div className=" relative w-full">
                            <select
                              name=""
                              id=""
                              className="select select-bordered w-full"
                              onChange={(e) => {
                                const nowList = [...list];
                                nowList[i].text = e.target.value;
                                setList(nowList);
                              }}
                            >
                              <option value="">select...</option>
                              <option value="github" className=" pl-6 w-full">
                                GitHub
                              </option>
                              <option value="youtub" className=" pl-6 w-full">
                                YouTube
                              </option>
                              <option value="linkedIn" className=" pl-6 w-full">
                                link
                              </option>
                            </select>
                            

                            {list[i].text === "github" && (
                              <Github className=" absolute top-3 left-0" />
                            // )
                            //   (list[i].text === "Youtube" && (
                            //   <Youtube className=" absolute top-3 left-0" />
                            // ) )||
                            //   list[i].text === "Facbook" && (
                            //     <Facbook className=" absolute top-3 left-0" />
                            //   )
                              
                   ) }

                            
                          </div>
                          <label htmlFor="" className=" text-lg">
                            {" "}
                            Link
                          </label>
                          <div className=" relative  ">
                            <input
                              type="text"
                              placeholder="Email@exemple.com"
                              className=" borderd  h-16 w-full pl-8 "
                            />
                            <img
                              src={ph}
                              alt=""
                              className=" h-6 w-6 absolute left-2 top-5 "
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              {/* <div className="  my-1 flex rounded-xl  justify-between w-full bg-base-100 h-80">
                <div className=" h-full flex w-1/3 items-center justify-center">
                  <p className=" text-neutral text-xl ">Profile picture</p>
                </div>
                <div className=" bg-purple-100 gap-2  h-full w-1/3 flex flex-col items-center justify-center ">
                  <img src={image} alt="" />
                  <p className=" text-3xl">+ Upload Image</p>
                </div>
                <div className=" w-1/3 mx-2 flex items-center justify-center ">
                  <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
                </div>
              </div> */}
              {/* <div className="flex flex-col justify-between w-[100%] h-10 bg-base-300 rounded-2xl"> */}

              <div className="foot w-full bg-base-200 h-15 mt-2 flex justify-end items-end rounded-xl">
                <button className="btn btn-primary h-full w-32">Save</button>
              </div>
              {/* </div> */}
            </div>
          </article>
        </article>
      </div>
    </div>
  );
};
export default ActiveProfil;
