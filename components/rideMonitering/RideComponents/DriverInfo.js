import React from "react";
import { CircleIcon } from "lucide-react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const DriverInfo = ({ driverData }) => {
    const ratings = [
        { stars: 5, review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,", user: "Alice", age: 22 },
        { stars: 4, review: "Comfortable and quick.", user: "Bob", age: 12 },
    ];

    const renderStars = (count) => {
        return Array(5)
            .fill(false)
            .map((_, i) => i < count);
    };
    const handleFlag = () => {
        console.log("jbij")
    };

    const handleMessage = () => {
        console.log("jbij")
    };

    return (
        <div className="p-4 border rounded-lg">
            <div className="flex space-x-4">
                <div className="relative">
                    <img src="/assets/user.svg" alt="Profile" className="h-24 w-24 rounded-full" />
                    <CheckBadgeIcon className="absolute bottom-6 right-1 text-blue-500 h-6 w-6" />
                </div>
                <div>
                    <div className="flex space-x-2">
                        <p className="text-xl font-semibold">Joseph Emmanuel</p>
                        <CircleIcon className="h-3 w-3 text-green-400 fill-green-400 mt-2" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <p className="text-gray-500 mr-2">Driver</p>
                        |
                        <div className="rounded-full px-2 ml-5 text-sm text-green-600 bg-green-100">
                            <p>Verified</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <h4 className="font-semibold">Ratings</h4>
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
                    <span className="ml-3">({ratings.length} reviews)</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
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
            <div className="grid grid-cols-2 gap-x-40 gap-y-3 w-full">
                <div>
                    <p className="font-semibold">Email:</p>
                    <p>{driverData.email}</p>
                </div>
                <div>
                    <p className="font-semibold">Phone:</p>
                    <p>{driverData.phone}</p>
                </div>
                <div>
                    <p className="font-semibold">Date of Birth:</p>
                    <p>{driverData.dob}</p>
                </div>
                <div>
                    <p className="font-semibold">Gender:</p>
                    <p>{driverData.gender}</p>
                </div>
            </div>
            <div className="flex justify-end space-x-2 mt-8">
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
    );
};

export default DriverInfo;
