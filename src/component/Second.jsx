import React from "react";
import img from "../assets/wallpaper.jpg";

const Second = () => {
  return (
    <div>
      <div className="mt-[50px]">
        <div className="ml-[300px] text-4xl font-bold">
          Have You ever posted any photo on Social Media.
        </div>
        <div className="ml-[300px] ">
          <div className="ml-[130px] mt-[20px] text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
            excepturi
          </div>
          <div className="ml-[190px] text-2xl">
            omnis quae optio commodi veritatis non voluptatum!
          </div>
        </div>
      </div>
      <div className="flex mt-[80px]">
        <div className="ml-[40px]">
          <div className="text-xl font-extrabold mt-[10px]">
            {" "}
            Set your Preciept
          </div>
          <div className="mt-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint autem
            tempora <br /> asperiores deserunt consectetur sequi. Dolore, quod
            recusandae
          </div>
          <div className="mt-[30px] text-xl font-extrabold">
            {" "}
            Lorem Preciept
          </div>
          <div className="mt-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint autem
            tempora <br /> asperiores deserunt consectetur sequi. Dolore, quod
            recusandae
          </div>
          <div className="mt-[30px] text-xl font-extrabold">
            {" "}
            Not The Preciept
          </div>
          <div className="mt-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint autem
            tempora <br /> asperiores deserunt consectetur sequi. Dolore, quod
            recusandae
          </div>
        </div>
        <div className="ml-[100px]">
          <img src={img} className=" w-[800px] h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Second;
