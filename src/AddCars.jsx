import React, { useState } from "react";
import Header from "./components/Header";
import carDetails from "../src/carDetails";
import InputField from "./Profile/InputField";
import DropDownField from "./Profile/DropDownField";
import TextAreaField from "./Profile/TextAreaField";
import { Button } from "./components/ui/button";
import { db } from "../configs";
import { CarListing } from "../configs/Schema";
import UploadImages from "./components/UploadImages";
import { Separator } from "@radix-ui/react-select";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { BiLoaderAlt } from "react-icons/bi";
import { useUser } from "@clerk/clerk-react";
import moment from "moment";

const AddCars = () => {
  // Now are geeting some data and store it useState
  const [formData, setFormData] = useState([]);
  const [triggerUploadImage, setTriggerUploadImage] = useState();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useUser();

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    console.log(formData);
    toast("Please wait...");
    try {
      const result = await db
        .insert(CarListing)
        .values({
          ...formData,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          postedOn: moment().format("dd/mm/yyyy"),
        })
        .returning({ id: CarListing.id });

      if (result) {
        console.log("Data Saved");
        setTriggerUploadImage(result[0]?.id);
        setLoader(false);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-3xl">Add New Car</h2>
        <form className="p-10 border rounded-xl mt-10">
          {/* Car  Details*/}
          <div>
            <h2 className="font-medium text-xl mb-6">Car Details</h2>
            <div className="grid grid-col-1 md:grid-cols-2 gap-5">
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className="text-sm">
                    {item?.label}{" "}
                    {item.required && <span className="text-red-600">*</span>}
                  </label>
                  {item.fieldType == "text" || item.fieldType == "number" ? (
                    <InputField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType == "dropdown" ? (
                    <DropDownField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType == "textarea" ? (
                    <TextAreaField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          {/* Car Images */}
          <Separator className="my-6" />
          <UploadImages
            triggerUploadImage={triggerUploadImage}
            setLoader={(v) => {
              setLoader(v);
              navigate("/profile");
            }}
          />
          <div className="mt-5 flex justify-start">
            <Button
              type="submit"
              className="bg-green-500 hover:bg-green-400"
              disabled={loader}
              onClick={(e) => onSubmit(e)}
            >
              {!loader ? "Add Car" : <BiLoaderAlt className="animate-spin" />}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCars;
