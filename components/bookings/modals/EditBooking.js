import React from "react";
import { Dialog, DialogTitle } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import {
  CircleIcon,
  CheckCircleIcon,
  StarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MapPinIcon
} from "lucide-react";
import DriverDetails, { PassengerDetails } from "./DriverPassengerDetails";

const EditBookingModal = ({ isOpen, onClose, data, userType }) => {
  const formik = useFormik({
    initialValues: {
      pickup_point: data.pickup_point || "",
      destination: data.destination || "",
      seats: data.seats || "",
      price: data.price || "",
      date: data.date || "",
      time: data.time || "",
    },
    validationSchema: Yup.object({
      pickup_point: Yup.string().required("Pickup Point is required"),
      destination: Yup.string().required("Destination is required"),
      seats: Yup.number().required("Seats are required").min(1, "At least 1 seat"),
      price: Yup.number().required("Price is required").min(1, "Price must be at least 1"),
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
    }),
    onSubmit: (values) => {
      // Handle the save logic
      console.log("Form values:", values);
    },
  });

  const [showPassengerDetails, setShowPassengerDetails] = useState({});



  const togglePassengerDetails = (index) => {
    setShowPassengerDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const handleFlag = () => {
    console.log("jbij")
  };

  const handleMessage = () => {
    console.log("jbij")
  };
  const dummyPassengers = [
    {
      name: "Azan Iqbal",
      email: "azan@example.com",
      phone: "123-456-7890",
      age: 22,
      gender: "Male",
      isVerified: true,
      rating: 5,
      review: "Great ride, very punctual!",
    },
    {
      name: "Emily Johnson",
      email: "emily@example.com",
      phone: "098-765-4321",
      age: 28,
      gender: "Female",
      isVerified: true,
      rating: 4,
      review: "Comfortable ride, but a bit late.",
    },
  ];


  const ratings = [
    { stars: 5, review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, ", user: "Alice", age: 22 },

  ];

  const getHeading = () => {
    switch (userType) {
      case "booking":
        return "View Booking Details";
      case "Requested":
        return "Requested Rides Details";
      case "Published":
        return "Published Rides Details";
      default:
        return "Booking Details";
    }
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        fullWidth
        maxWidth="md"
        className="rounded-xl"
      >
        <DialogTitle>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{getHeading()}</h3>
            <button onClick={onClose}>
              <svg
                className="h-6 w-6 cursor-pointer text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </DialogTitle>

        <div className="p-6 space-y-3">

          {/* Driver's Details */}
          {userType !== 'Requested' &&
            <DriverDetails />
          }
          {/* passengers Detaiil */}
          {userType !== 'Published' &&
            <PassengerDetails userType={userType} />}
          <form onSubmit={formik.handleSubmit}>
            <div className=" space-y-3">
              {/* Ride Details */}
              <div className="space-y-2 font-semibold text-base">
                <div>
                  <label className="text-sm font-normal flex items-center">
                    Pickup Point:
                  </label>
                  <div className="relative flex items-center">
                    <MapPinIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="pickup_point"
                      className="w-full border px-10 py-2 rounded-md"
                      onChange={formik.handleChange}
                      value={formik.values.pickup_point}
                    />
                  </div>
                  {formik.errors.pickup_point && formik.touched.pickup_point && (
                    <p className="text-red-500 text-sm">{formik.errors.pickup_point}</p>
                  )}
                </div>

                {/* Destination Field */}
                <div className="mt-3">
                  <label className="text-sm font-normal flex items-center">
                    Destination:
                  </label>
                  <div className="relative flex items-center">
                    <MapPinIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="destination"
                      className="w-full border px-10 py-2 rounded-md"
                      onChange={formik.handleChange}
                      value={formik.values.destination}
                    />
                  </div>
                  {formik.errors.destination && formik.touched.destination && (
                    <p className="text-red-500 text-sm">{formik.errors.destination}</p>
                  )}
                </div>


                <div className="grid grid-cols-2 gap-4 ">

                  <div>
                    <label className="text-sm font-normal">Price:</label>
                    <input
                      type="number"
                      name="price"
                      className="w-full border px-2 py-1 rounded-md"
                      onChange={formik.handleChange}
                      value={formik.values.price}
                    />
                    {formik.errors.price && formik.touched.price && (
                      <p className="text-red-500 text-sm">{formik.errors.price}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-normal">Seats:</label>
                    <input
                      type="number"
                      name="seats"
                      className="w-full border px-2 py-1 rounded-md"
                      onChange={formik.handleChange}
                      value={formik.values.seats}
                    />
                    {formik.errors.seats && formik.touched.seats && (
                      <p className="text-red-500 text-sm">
                        {formik.errors.seats}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-normal">Date:</label>
                    <input
                      type="date"
                      name="date"
                      className="w-full border px-2 py-1 rounded-md"
                      onChange={formik.handleChange}
                      value={formik.values.date}
                    />
                    {formik.errors.date && formik.touched.date && (
                      <p className="text-red-500 text-sm">{formik.errors.date}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-normal">Time:</label>
                    <input
                      type="time"
                      name="time"
                      className="w-full border px-2 py-1 rounded-md"
                      onChange={formik.handleChange}
                      value={formik.values.time}
                    />
                    {formik.errors.time && formik.touched.time && (
                      <p className="text-red-500 text-sm">{formik.errors.time}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="text-sm text-red-700 px-3 py-2 bg-white border border-gray-300 rounded-md"
                  onClick={onClose}
                >
                  Go Back
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  );
};

export default EditBookingModal;
