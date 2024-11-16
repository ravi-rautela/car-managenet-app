import React from "react";
import Search from "./Search";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center p-10 py-20 gap-2 h-[680px] w-full bg-[rgb(234,235,241)] ">
        <h2 className="text-lg">
          You can add or see your best choise car here.
        </h2>
        <h2 className="text-[60px] font-bold">Find Your Dream Car</h2>
        <Search />

        <img src="/tesla.png" alt="car" className="mt-20" />
      </div>
    </>
  );
};

export default Hero;
