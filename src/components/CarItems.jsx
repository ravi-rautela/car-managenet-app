import React from "react";
import { Separator } from "./ui/separator";
import { LuFuel } from "react-icons/lu";
import { TbBrandSpeedtest } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";

const CarItems = ({ car }) => {
  return (
    <div className="rounded-xl bg-white border hover:shadow-md cursor-pointer">
      <img
        src={car?.images[0]?.imagesUrl}
        height={250}
        className="rounded-t-xl"
      />
      <div className="p-4">
        <h2 className="font-bold text-black text-lg mb-2 ">
          {car?.listingTitle}
        </h2>
        <Separator />
        <div className="grid grid-cols-3 mt-4">
          <div className="flex flex-col items-center">
            <LuFuel className="text-sm mb-2" />
            <h2>{car.mileage} Miles</h2>
          </div>
          <div className="flex flex-col items-center">
            <TbBrandSpeedtest className="text-sm mb-2" />
            <h2>{car.fuelType}</h2>
          </div>
          <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-sm mb-2" />
            <h2>{car.transmission}</h2>
          </div>
        </div>
        <Separator className="my-2" />
        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-xl">${car.sellingPrice}</h2>
            <h2 className="text-[#5d92ee] text-sm flex gap-2 items-center">
              View Details
              <MdOpenInNew />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItems;
