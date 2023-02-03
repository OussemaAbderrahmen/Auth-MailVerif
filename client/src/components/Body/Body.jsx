import React, { useState } from "react";
const Body = () => {
  return (
    <div className="w-full h-screen flex flex-row">
      <section className="w-[150px] h-screen  ">
        <div className="w-[100px] h-[100] flex flex-row ">
          <img
            src="assets/heart.png"
            alt="image"
            className="h-[50px] w-[50px] object-fit rounded-full"
          />
          <div className="flex flex-col ml-25">
            <p>text</p>
            <p>text</p>
          </div>
        </div>
      </section>
      <div>
        <section className="w-full"></section>
      </div>
      <section className=" w-[200px] object-fit"></section>
    </div>
  );
};

export default Body;
