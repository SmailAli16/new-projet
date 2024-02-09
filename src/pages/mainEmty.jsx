import main from "../assets/main.svg";
import Ellipse from "../assets/Ellipse.svg";
import Flesh from "../assets/flesh.svg";
import GitHub from "../assets/github.svg";
import youtub from "../assets/youtub.svg";
import link from "../assets/link.svg";
import myPhoto from "../assets/smil.jpg";

const Empty = () => {
  return (
    <div className="w-full  ">
      <div className=" bg-base-300  h-[357px] w-full rounded-b-3xl  mr-[20px] pt-10 px-4">
        <div className=" bg-base-100  w-full rounded-md p-3 flex justify-between">
          <button className=" btn btn-primary btn-outline  rounded-md ">
            Back to Editor
          </button>
          <button className="btn btn-primary">share Link</button>
        </div>
      </div>
      <div className=" p-16 -mt-56 pt-12 flex flex-col bg-base-200 m-auto  w-[449px] rounded-[90px] relative l-[208px] gap-8   shadow-2xl">
        <img
          src={myPhoto}
          alt=""
          className=" rounded-tl-full rounded-tr-full  h-[300px] w-[300px] mx-auto "
        />

        <h1 className=" text-3xl font-bold text-center -mt-6">Ali</h1>
        <p className=" text-neutral text-xl text-center -mt-6">
          ben@example.com
        </p>
        <button className=" flex justify-between btn bg-black text-white hover:bg-gray-800">
          <div className="flex items-center gap-2">
            <img src={GitHub} alt="" />
            GitHub
          </div>
          <img src={Flesh} alt="" />
        </button>
        <button className="btn flex justify-between bg-red-500 text-white hover:bg-red-800 ">
          <div className=" flex items-center gap-2">
            <img src={youtub} alt="" />
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
  );
};

export default Empty;

const platform = ({ name, href }) => {
  if (name == "youtub")
    return (
      <button className=" flex justify-between btn bg-black text-white hover:bg-gray-800">
        <div className="flex items-center gap-2">
          <img src={GitHub} alt="" />
          GitHub
        </div>
        <img src={Flesh} alt="" />
      </button>
    );
  if (name == GitHub)
    return (
      <button className=" flex justify-between btn bg-black text-white hover:bg-gray-800">
        <div className="flex items-center gap-2">
          <img src={GitHub} alt="" />
          GitHub
        </div>
        <img src={Flesh} alt="" />
      </button>
    );
};
