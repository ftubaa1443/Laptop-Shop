import React from "react";
import img from "../assets/wallpaper.jpg";

const Third = () => {
  return (
    <div>
      <div className="mt-[50px]">
        <div className="ml-[500px] text-4xl font-bold">
          Make Your Photo more stylish
        </div>
        <div className="ml-[250px] ">
          <div className="ml-[130px] mt-[20px] text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
            excepturi
          </div>
          <div className="ml-[190px] text-2xl">
            omnis quae optio commodi veritatis non voluptatum!
          </div>
        </div>
      </div>
      <div className="mt-[50px] flex gap-20 pl-[80px] pr-[80px]">
        <div className="h-[500px] ">
          <img src={img} className="" />
          <div className=" h-[200px] border-2">
            <div className="mt-[20px] text-xl ml-[100px] font-bold">
              lula lora Lorem
            </div>
            <div className="mt-[10px] ml-[100px]">
              lorem is the find of the <br />
              find the job is good for <br />
              great job.
            </div>
          </div>
        </div>
        <div className="h-[500px]">
          <img src={img} className="" />
          <div className=" h-[200px] border-2">
            <div className="mt-[20px] ml-[100px] text-xl font-bold">
              heya Lorem
            </div>
            <div className="mt-[10px] ml-[100px]">
              lorem is the find of the <br />
              find the job is good for <br />
              great job.
            </div>
          </div>
        </div>
        <div className="h-[500px]">
          <img src={img} className="" />
          <div className=" h-[200px] border-2">
            <div className="mt-[20px] ml-[100px] text-xl font-bold">
              Lorem mata{" "}
            </div>
            <div className="mt-[10px] ml-[100px]">
              lorem is the find of the <br />
              find the job is good for <br />
              great job.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
