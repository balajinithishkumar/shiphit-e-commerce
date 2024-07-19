import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import keys from "./keys";

const AwbTracking = () => {
  const [database, setdatabase] = useState([])
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({});
  async function get() {
   
    try {
      const response = await axios.get(keys.shiphit_url);
      setdatabase(response.data)
    } catch (error) {
      console.error('Error sending/receiving data to/from Google Sheet:', error);
    }
  }

  get();

  const onSubmit = (data) => {
    // console.log(data);
  };

  const handleAwbIdChange = (event) => {
    const awbId = event.target.value;
    const matchedData = database.find((entry) => entry.awbTrackingID === awbId);
    if (matchedData) {
      setFormData(matchedData);
    } else {
      setFormData({});
      reset({
        awbTrackingID: awbId,
        consigneeName: "",
        consigneePhoneNumber: "",
        consignorName: "",
        consignorPhoneNumber: "",
        from: "",
        to: "",
        weight: "",
        update: "",
      });
    }
  };

  useEffect(() => {
    if (formData.awbTrackingID) {
      Object.keys(formData).forEach((key) => {
       if(key == "DateTimeStamp"){
        setValue("update", formData.update+ " " +formData.DateTimeStamp)
       } 
        setValue(key, formData[key]);
      });
    }
  }, [formData, setValue]);

  return (
    <div className="w-full h-screen mx-auto flex justify-center items-center bg-gray-100">
      <form
        className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex pb-4 mb-5 border-b-2 items-end gap-4 sm:gap-10">
          <div className="flex-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="awb-id"
            >
              AWB Tracking ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="awb-id"
              type="text"
              placeholder="Tracking ID"
              {...register("awbTrackingID", {
                required: "AWB Tracking ID is required",
                minLength: {
                  value: 6,
                  message: "AWB Tracking ID must be at least 6 characters",
                },
                maxLength: {
                  value: 20,
                  message: "AWB Tracking ID must be at most 20 characters",
                },
                onChange: handleAwbIdChange,
              })}
            />
            {errors.awbTrackingID && (
              <p className="text-red-500 text-xs italic">
                {errors.awbTrackingID.message}
              </p>
            )}
          </div>
          <button
            className="bg-blue-500 h-fit w-fit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="consignee-name"
            >
              Consignee Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="consignee-name"
              type="text"
              placeholder="Consignee Name"
              {...register("consigneeName")}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="consignor-name"
            >
              Consignor Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="consignor-name"
              type="text"
              placeholder="Consignor Name"
              {...register("consignorName")}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="consignee-phone"
            >
              Consignee Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="consignee-phone"
              type="tel"
              placeholder="Consignee Phone Number"
              {...register("consigneePhoneNumber")}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="consignor-phone"
            >
              Consignor Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="consignor-phone"
              type="tel"
              placeholder="Consignor Phone Number"
              {...register("consignorPhoneNumber")}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="from"
          >
            From
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="from"
            type="text"
            placeholder="From"
            {...register("from")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="to"
          >
            To
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="to"
            type="text"
            placeholder="To"
            {...register("to")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="weight"
          >
            Weight
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="weight"
            type="text"
            placeholder="Weight"
            {...register("weight")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="update"
          >
            Update Information
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="update"
            type="text"
            placeholder="Update Information"
            {...register("update")}
          />
        </div>
      </form>
    </div>
  );
};

export default AwbTracking;