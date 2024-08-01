import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { UserCheck, Clock, User, Slash, CheckCircle } from "lucide-react"; // Icons for comments
import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { Download, Image as ImageIcon, Video as VideoIcon } from "lucide-react";
import FlagUserModal from "@/components/userManagment/Modals/FlaggingUser";

const ViewReportDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter()

  const [flagReceiverModalOpen, setFlagReceiverModalOpen] = useState(false);

  const ratings = [
    { stars: 5, review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.", user: "Alice", age: 22, image: "/assets/user.svg" },
    { stars: 4, review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis..", user: "Bob", age: 12, image: "/assets/user.svg" },
    { stars: 2, review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.", user: "Charlie", age: 29, image: "/assets/user.svg" },
    { stars: 3, review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.", user: "Dave", age: 34, image: "/assets/user.svg" },
    { stars: 2, review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.", user: "Eve", age: 27, image: "/assets/user.svg" },
  ];

  const openFlagReceiverModal = () => setFlagReceiverModalOpen(true);
  const closeFlagReceiverModal = () => setFlagReceiverModalOpen(false);
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const handleGoBack = () => {
    // Replace with actual logic to go back, e.g., useRouter from Next.js or history from React Router
    router.push("/ratings")
  };
  const handleDownload = (fileUrl) => {
    // Create a link element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="">
      <h2 className="font-semibold text-slate-600 text-sm pl-4">
        <span
          className=" cursor-pointer"
          onClick={handleGoBack}
        >
          All Reports
        </span>{"   "}
        &gt;   <span className="text-green-500"> All Azaan Iqbal </span>
      </h2>
      <div className="p-7">
        <h2 className="font-semibold text-lg mt-2">
          All Azaan Iqbal Reports
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


                <div className="space-y-4">
                  {ratings.map((rating, index) => (
                    <div key={index} className="p-3 shadow-md border border-gray-300 rounded-lg">
                      <div className="grid grid-cols-7 gap-2">
                        <div className="col-span-1 flex flex-col">
                          <img src={rating.image} alt="User" className="w-20 h-20 " />
                          <p className="font-semibold ml-3">Drew</p>
                        </div>
                        <div className="col-span-6">
                          <div className="flex space-x-2 items-center">
                            <p className="text-base font-semibold">By: {rating.user}</p>


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
            <h2 className="text-xl font-semibold">View Report Details</h2>
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
            <div className="grid grid-cols-1 gap-4 mt-6">
              <p className="text-base font-semibold">Sender</p>
              <div className="flex space-x-4">
                <div className=" relative">
                  <img src="/assets/user.svg" alt="Profile" className="h-24 w-24  rounded-full" />
                  <CheckCircleIcon className="absolute bottom-6 right-1 text-blue-500  h-6 w-6" />
                </div>
                <div>
                  <p className="text-xl font-semibold">Joseph Emmanuel</p>
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
                  <p className="text-xl font-semibold">Azan Iqbal</p>
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

            <div className="my-3">
              <h2 className="text-lg font-semibold">Comments</h2>
              <p className="text-sm">Azaan is very good passneger, cool , clam and colected . Fun to ride with wo=touth any hassle at anybpoint in the koirunty. Highly recommend.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Image Card */}
              <div className="border rounded-lg p-4 py-6">
                <div className="flex items-center space-x-6 mb-4">
                  <ImageIcon className="w-6 h-6 text-gray-600" />
                  <p className="text-sm font-semibold">Image93.img</p>
             
                  <button
                    className="text-gray-500 px-3"
                    onClick={() => handleDownload("/path/to/image.jpg")}
                  >
                    <Download className="w-6 h-6" />
                   
                  </button>
                  </div>
             </div>

              {/* MP4 Video Card */}
              <div className="border rounded-lg p-4 py-6">
                <div className="flex items-center space-x-6 mb-4">
                  <VideoIcon className="w-6 h-6 text-gray-600" />
                  <p className="text-sm font-semibold">Video002.mp4</p>
                  <button
                    className=" text-gray-500 px-3"
                    onClick={() => handleDownload("/path/to/video.mp4")}
                  >
                    <Download className="w-6 h-6" />
                   
                  </button>
                </div>
            
          
              </div>
            </div>
            <div className="flex space-x-2 border-t border-gray-200 pt-4">

              <button className="text-green-500 bg-slate-50 px-3 py-1 rounded-md" >
                View Trip Info
              </button>
              <button className="bg-yellow-600 text-white px-3 py-1 rounded-md" onClick={openFlagReceiverModal}>
                Flag Receiver
              </button>
            </div>
          </div>
        </div>

        <FlagUserModal isOpen={flagReceiverModalOpen} onClose={closeFlagReceiverModal} data={{ FullName: 'Azaan Iqbal' }} />
      </div>
    </div>
  );
};

export default ViewReportDetails;
