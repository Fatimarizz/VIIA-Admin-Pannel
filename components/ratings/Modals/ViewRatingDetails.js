import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { UserCheck, Clock, User, Slash, CircleIcon } from "lucide-react"; // Icons for comments
import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import DeleteRatings from "./DeleteRating";
import FlagUserModal from "@/components/userManagment/Modals/FlaggingUser";

const ViewRatingDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter()
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [tripInfoModalOpen, setTripInfoModalOpen] = useState(false);
  const [flagReceiverModalOpen, setFlagReceiverModalOpen] = useState(false);

  const ratings = [
    { stars: 5, review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.", user: "Alice", age: 22, image: "/assets/user.svg" },
    { stars: 4, review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis..", user: "Bob", age: 12, image: "/assets/user.svg" },
    { stars: 2, review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.", user: "Charlie", age: 29, image: "/assets/user.svg" },
    { stars: 3, review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.", user: "Dave", age: 34, image: "/assets/user.svg" },
    { stars: 2, review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.", user: "Eve", age: 27, image: "/assets/user.svg" },
  ];

  const openDeleteModal = () => setDeleteModalOpen(true);
  const closeDeleteModal = () => setDeleteModalOpen(false);
  const openTripInfoModal = () => setTripInfoModalOpen(true);
  const closeTripInfoModal = () => setTripInfoModalOpen(false);
  const openFlagReceiverModal = () => setFlagReceiverModalOpen(true);
  const closeFlagReceiverModal = () => setFlagReceiverModalOpen(false);
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const handleGoBack = () => {
    // Replace with actual logic to go back, e.g., useRouter from Next.js or history from React Router
    router.push("/ratings")
  };
  return (
    <div className="">
      <h2 className="font-semibold text-slate-600 text-sm pl-4">
        <span
          className=" cursor-pointer"
          onClick={handleGoBack}
        >
          All Rating
        </span>{"   "}
        &gt;   <span className="text-green-500"> All Azaan Iqbal </span>
      </h2>
      <div className="p-7">
        <h2 className="font-semibold text-lg mt-2">
          All Azaan Iqbal Ratings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Side */}
          <div className="">
            <Tabs value={activeTab} onChange={handleTabChange} className="w-full ">
              <Tab label="Passenger" />
              <Tab label="Driver" />
            </Tabs>
            <div className="mt-4">

              <div>
                <div className="text-center mb-4 flex space-x-4 items-center">
                  <div>

                    <p className="text-5xl font-bold">4.5</p>
                    <div className="flex items-center mt-3">
                      {Array(5)
                        .fill(3)
                        .map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 text-green-500" />
                        ))}
                    </div>
                    <p className="text-gray-500 flex">{ratings.length} Ratings</p>
                  </div>

                  <div className="my-2 w-full">
                    {/* Ratings Bars */}
                    {["5", "4", "3", "2", "1"].map((rating, index) => (
                      <div key={index} className="flex items-center mb-1">
                        <span className="w-6 text-right mr-2">{rating}</span>
                        <div className="w-full bg-gray-200 rounded h-2">
                          <div className={`bg-green-500 h-full rounded`} style={{ width: `${rating * 20}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className=" relative">
                    <img src="/assets/user.svg" alt="Profile" className="h-40 w-40  rounded-full" />
                    <CheckCircleIcon className="absolute bottom-12 right-3 text-green-500  h-6 w-6" />
                  </div>
                </div>
                <div className="flex justify-around items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <UserCheck className="text-green-500" />
                    <p>Verified profile</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="text-blue-500" />
                    <p>Timely</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="text-purple-500" />
                    <p>Good passenger</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Slash className="text-red-500" />
                    <p>Never cancel rides</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {ratings.map((rating, index) => (
                    <div key={index} className="p-4 border border-gray-300 rounded-lg">
                      <div className="grid grid-cols-7 gap-2">
                        <div className="col-span-1">
                          <img src={rating.image} alt="User" className="w-20 h-20 " />
                          <p className="font-semibold ml-3">Drew</p>
                        </div>
                        <div className="col-span-6">
                          <div className="flex space-x-2 items-center">
                            <p className="text-base font-semibold">{rating.user}</p>
                            <p className="text-sm text-gray-400">Driver</p>
                            <div className="flex">
                              {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                  i < rating.stars ? (
                                    <StarIcon key={i} className="h-5 w-5 text-green-300" />
                                  ) : (
                                    <StarIcon key={i} className="h-5 w-5 text-gray-300" />
                                  )
                                ))}
                            </div>
                          </div>
                          <p className="text-sm mt-2">{rating.review}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          {/* Right Side */}
          <div className="p-6  border shadow-xl rounded-xl h-fit">
          <h2 className="text-xl font-semibold">View Ratings Details</h2>
            <div className="grid grid-cols-2 my-4" >
              <div >
                <p className="font-semibold">Trip ID</p>
                <p>1203</p>
              </div>
              <div>
                <p className="font-semibold">Date:</p>
                <p>14 October, 2023</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <p className="text-base font-semibold">Sender</p>
              <div className="flex  space-x-4">
                <div className=" relative">
                  <img src="/assets/user.svg" alt="Profile" className="h-24 w-24  rounded-full" />
                  <CheckCircleIcon className="absolute bottom-6 right-1 text-blue-500  h-6 w-6" />
                </div>
                <div>
                <div className="flex space-x-2">
                  <p className="text-xl font-semibold">Joseph Emmanuel</p>
                   <CircleIcon className='h-3  text-green-400 w-3 fill-green-400 mt-2' />
                   </div>

                  <div className="flex  items-center space-x-2">
                    <p className="text-gray-500 mr-2">Driver</p>
                    |
                    <div className="rounded-full px-2  ml-5 text-sm text-green-600 bg-green-100">
                      <p className="">Verified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4">
              <p className="text-base font-semibold">Receiver</p>

              <div className="flex border rounded-md py-2 shadow-sm space-x-4">
                <div className=" relative">
                  <img src="/assets/user.svg" alt="Profile" className="h-24 w-24  rounded-full" />
                  <CheckCircleIcon className="absolute bottom-6 right-1 text-blue-500  h-6 w-6" />
                </div>
                <div>
                  <div className="flex space-x-2">
                  <p className="text-xl font-semibold">Azan Iqbal</p>
                   <CircleIcon className='h-3  text-green-400 w-3 fill-green-400 mt-2' />
                   </div>
                  <div className="flex  items-center space-x-2">
                    <p className="text-gray-500 mr-2">Passenger</p>
                    |
                    <div className="rounded-full px-2  ml-5 text-sm text-green-600 bg-green-100">
                      <p className="">Verified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold">Rating</p>
              <div className="flex items-center my-4">
                {Array(5)
                  .fill(3)
                  .map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-green-400" />
                  ))}
              </div>
            </div>
            <div className="my-3">
              <h2 className="text-lg font-semibold">Comments</h2>
              <p className="text-sm">Azaan is very good passneger, cool , clam and colected . Fun to ride with wo=touth any hassle at anybpoint in the koirunty. Highly recommend.</p>
            </div>
            <div className="flex space-x-2 border-t border-gray-200 pt-4">
              <button className="text-red-500 px-3 py-1 rounded-md" onClick={openDeleteModal}>
                Delete Rating
              </button>
             
              <button className="bg-yellow-600 text-white px-3 py-1 rounded-md" onClick={openFlagReceiverModal}>
                Flag Receiver
              </button>
            </div>
          </div>
        </div>
        <DeleteRatings isOpen={deleteModalOpen} onClose={closeDeleteModal} data={{FullName:'Azaan Iqbal'}} />
        <FlagUserModal  isOpen={flagReceiverModalOpen} onClose={closeFlagReceiverModal} data={{FullName:'Azaan Iqbal'}}/>
      </div>
    </div>
  );
};

export default ViewRatingDetails;
