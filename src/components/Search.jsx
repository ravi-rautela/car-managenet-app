import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";
import CarCompanyData from "@/CarCompanyData";

const Search = () => {
  return (
    <div className="p-2 md:p-3 bg-white rounded-md md:rounded-full flex-cal md:flex md:flex-row gap-10 px- items-center w-[60%] ">
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">New</SelectItem>
          <SelectItem value="dark">Old</SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />

      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Car Company" />
        </SelectTrigger>
        <SelectContent>
          {CarCompanyData.carCompanies.map((comp, index) => {
            return (
              <SelectItem key={index} value={comp.name}>
                {comp.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />

      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Pricing ($)" />
        </SelectTrigger>
        <SelectContent>
          {CarCompanyData.carPricing.map((pricing, index) => {
            return (
              <SelectItem key={index} value={pricing.price}>
                {pricing.price}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <div>
        <CiSearch className="text-[50px] bg-primary rounded-full p-3 text-white font-bold hover:scale-105 transition-all hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Search;
