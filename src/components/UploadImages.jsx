import axios from "axios";

import React, { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { db } from "../../configs";
import { CarImages } from "../../configs/Schema";

const UploadImages = ({ triggerUploadImage, setLoader }) => {
  const [selectedFileList, setSelectedFileList] = useState([]);

  useEffect(() => {
    if (triggerUploadImage) {
      uploadeImagesToServer();
    }
  }, [triggerUploadImage]);

  const onFileSelected = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      setSelectedFileList((prev) => [...prev, file]);
    }
  };

  const onImageRemove = (image, index) => {
    const result = selectedFileList.filter((item) => item != image);
    setSelectedFileList(result);
  };

  const uploadeImagesToServer = async () => {
    try {
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

      const uploadedImageUrls = [];
      setLoader(true);
      // Loop through each selected file and upload it
      for (const file of selectedFileList) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset);

        // Upload the image to Cloudinary
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData
        );

        // Check if Cloudinary returned a valid URL
        if (!response.data.secure_url) {
          console.error("Error: Cloudinary did not return a secure URL");
          continue; // Skip this file
        }

        // Save the uploaded image URL to the database
        const dbResponse = await db.insert(CarImages).values({
          imageUrl: response.data.secure_url, // Save secure_url
          carListingId: triggerUploadImage, // ID reference
        });

        uploadedImageUrls.push({
          url: response.data.secure_url,
          dbResponse,
        });
      }
      setLoader(false);

      console.log("All uploaded images:", uploadedImageUrls);
      return uploadedImageUrls; // Return uploaded URLs for further use
    } catch (error) {
      console.error("Error uploading images:", error);
      throw error; // Rethrow error for external error handling
    }
  };

  // const uploadeImagesToServer = async () => {
  //   try {
  //     const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  //     const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  //     // Validate selected files
  //     if (!selectedFileList || selectedFileList.length === 0) {
  //       throw new Error("No files selected for upload.");
  //     }

  //     const uploadedImageUrls = [];
  //     setLoader(true); // Enable loader before upload

  //     // Batch upload images using Promise.all for better performance
  //     const uploadPromises = selectedFileList.map(async (file) => {
  //       const formData = new FormData();
  //       formData.append("file", file);
  //       formData.append("upload_preset", uploadPreset);

  //       // Upload file to Cloudinary
  //       const response = await axios.post(
  //         `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
  //         formData
  //       );

  //       console.log("Cloudinary Response:", response.data);

  //       // Insert uploaded image URL into the database
  //       await db.insert(CarImages).values({
  //         imageUrl: response.data.secure_url, // Cloudinary image URL
  //         carListingId: triggerUploadImage, // Associated car ID
  //       });

  //       return response.data.secure_url;
  //     });

  //     // Wait for all uploads and database insertions to complete
  //     const allUploadedUrls = await Promise.all(uploadPromises);

  //     console.log("All Uploaded Image URLs:", allUploadedUrls);

  //     // Disable loader after completion
  //     setLoader(false);

  //     return allUploadedUrls;
  //   } catch (error) {
  //     setLoader(false); // Ensure loader is disabled on error
  //     console.error("Error uploading images:", error.message);
  //     console.error("Full Error Details:", error);
  //     throw error; // Rethrow for further handling
  //   }
  // };

  return (
    <div>
      <div>
        <h2 className="font-medium text-xl my-3">Upload Car Images</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {selectedFileList.map((image, index) => (
            <div key={index}>
              <h2>
                <IoMdCloseCircle
                  className="absolute m-2 text-lg cursor-pointer"
                  onClick={() => onImageRemove(image, index)}
                />
              </h2>
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="w-full h-[130px] object-cover rounded-xl"
              />
            </div>
          ))}
          <label htmlFor="upload-images">
            <div
              className="border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer
            hover:shadow-md"
            >
              <h2 className="text-lg text-center text-blue-500">+</h2>
            </div>
          </label>
          <input
            type="file"
            multiple={true}
            id="upload-images"
            className="opacity-0"
            onChange={onFileSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadImages;
