import { Button } from "@/components/ui/button";
import { db } from "../configs";
import { CarImages, CarListing } from "../configs/Schema";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { desc, eq } from "drizzle-orm";
import Service from "./Services";
import CarItems from "@/components/CarItems";

const MyListing = () => {
  const { user } = useUser();
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    if (user) {
      getUserCarListing();
    }
  }, [user]);

  const getUserCarListing = async () => {
    try {
      const result = await db
        .select()
        .from(CarListing)
        .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
        .where(
          eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
        .orderBy(desc(CarListing.id));

      const resp = Service.FormatResult(result);
      console.log("Formatted result:", resp); // Log formatted result
      setCarList(resp);
    } catch (error) {
      console.error("Error fetching user car listing:", error);
    }
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-3xl">My Car Collections</h2>
        <Link to="/add-car">
          <Button className="bg-green-500 hover:bg-green-400">
            + Add New Car
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5">
        {carList.map((item) => (
          <div key={item.CarImages?.id || Math.random()}>
            <CarItems car={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListing;
