import React from "react";
import { CircleIcon, CheckCircleIcon } from "lucide-react";
import { useState } from "react";
import { StarIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";


const DriverDetails = ({ driver }) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            <p className="text-base font-semibold ml-3">Driver</p>
            <div className="flex space-x-4">
                <div className="relative">
                    <img src="/assets/user.svg" alt="Profile" className="h-24 w-24 rounded-full" />
                    <CheckCircleIcon className="absolute bottom-6 right-1 text-blue-500 h-6 w-6" />
                </div>
                <div>
                    <div className="flex space-x-2">
                        <p className="text-2xl font-semibold">Joseph Emmanuel</p>
                        <CircleIcon className="h-3 text-green-400 w-3 fill-green-400 mt-2" />
                    </div>

                    <div className="flex items-center space-x-2">
                        <p className="text-gray-500 mr-2">Driver</p>|
                        <div className="rounded-full px-2 ml-5 text-sm text-green-600 bg-green-100">
                            <p className="">Verified</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DriverDetails;


export const PassengerDetails = ({ passenger, index, userType }) => {

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
    const renderStars = (count) => {
        return Array(5)
            .fill(false)
            .map((_, i) => i < count);
    };


    const ratings = [
        { stars: 5, review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, ", user: "Alice", age: 22 },

    ];
    return (
        <div className="">
            <h2 className="text-lg font-semibold">{userType === "Requested" ? "Passenger" : "Passengers"}</h2>

            {dummyPassengers.map((passenger, index) => (
                <div key={index} className="border rounded-lg shadow-sm p-3 mb-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => togglePassengerDetails(index)}>
                        <div className="flex space-x-4 items-center">
                            <div className="relative">
                                <img src="/assets/user.svg" alt="Profile" className="h-12 w-12 rounded-full" />
                                {passenger.isVerified && (
                                    <CheckBadgeIcon className="absolute bottom-0 right-0 text-blue-500 h-5 w-5" />
                                )}
                            </div>
                            <div>
                                <div className="flex space-x-2">
                                    <div>
                                        <p className="text-lg font-semibold">{passenger.name}</p>
                                    </div>
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
                        <div>
                            {showPassengerDetails[index] ? (
                                <ChevronUpIcon className="h-6 w-6 text-gray-500" />
                            ) : (
                                <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                            )}
                        </div>
                    </div>

                    {showPassengerDetails[index] && (
                        <div className="mt-4 space-y-3">
                            <div>
                                <p className="text-lg font-semibold">Rating</p>
                                <div className="flex items-center my-2">
                                    {renderStars(5).map((filled, index) => (
                                        <svg
                                            key={index}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill={filled ? "#EAAA08" : "none"}
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className={`w-6 h-6 ${filled ? "text-yellow-500" : "text-gray-300"}`}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                            />
                                        </svg>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 gap-4 ">
                                    {ratings.map((rating, index) => (
                                        <div key={index} className="p-4 border rounded-md">
                                            <div className="flex space-x-2 items-center">
                                                <p className="text-sm font-semibold">{rating.user}</p>
                                                <p className="text-xs text-gray-400">{rating.age} yrs</p>
                                                <div className="flex">
                                                {renderStars(rating.stars).map((filled, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill={filled ? "#03C548" : "none"}
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className={`w-4 h-4 ${filled ? "text-lightgreen" : "text-gray-300"}`}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                            />
                                        </svg>
                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-sm text-wrap">{rating.review}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <p>{passenger.email}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Phone Number:</p>
                                    <p>{passenger.phone}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Age:</p>
                                    <p>{passenger.age} years</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Gender:</p>
                                    <p>{passenger.gender}</p>
                                </div>
                            </div>
                            <div className="flex justify-end space-x-2 mt-12">
                                <button
                                    type="button"
                                    className="text-sm text-red-700 px-3 py-2 bg-white "

                                >
                                    Remove From Booking
                                </button>
                                <button
                                    type="button"
                                    className="text-sm text-gray-700 px-3 py-2 bg-white border border-gray-300 rounded-md"
                                    onClick={handleFlag}
                                >
                                    Flag User
                                </button>
                                <button
                                    type="button"
                                    onClick={handleMessage}
                                    className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
                                >
                                    Message
                                </button>

                            </div>
                        </div>

                    )}


                </div>
            ))}
        </div>
    );
};


