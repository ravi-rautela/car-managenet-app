import React from "react";
import CarItems from "./CarItems";
import fakeData from "@/fakeData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MostSearchCars = () => {
  return (
    <>
      <div className="mx-24">
        <h2 className="font-bold text-3xl text-center mt-16 mb-10">
          Most Trending Cars
        </h2>
        <Carousel>
          <CarouselContent>
            {fakeData.carList.map((car, index) => (
              //   Add Card Components here
              <CarouselItem className="basis-1/3">
                <CarItems car={car} key={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default MostSearchCars;
