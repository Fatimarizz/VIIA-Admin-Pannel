import React from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { CircleIcon } from "lucide-react";

const Safety = ({ safetyInfo }) => {

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert(`${text} copied to clipboard!`);
    };

    return (
        <div className="p-4 rounded-lg shadow-sm border">
            <div className="flex space-x-4 items-center">
                <p>Safety Check</p>
                {/* Safety Status */}
                <div className="px-2 py-1 rounded-lg bg-red-100 text-red-600">
                    <p className="font-semibold">Emergency</p>
                </div>
            </div>

            {/* Personal Information */}
            <div className="my-4 p-4 rounded-lg bg-gray-50 border">
                <div className="flex space-x-4">
                    <div className="relative">
                        <img src="/assets/user.svg" alt="Profile" className="h-24 w-24 rounded-full" />
                        <CheckBadgeIcon className="absolute bottom-8 right-1 text-blue-500 h-5 w-5" />
                    </div>
                    <div>
                        <div className="flex space-x-2">
                            <div>
                                <p className="text-lg font-semibold">Joseph Emmanuel</p>
                            </div>
                            <CircleIcon className='h-3  text-green-400 w-3 fill-green-400 mt-2' />
                        </div>

                        <div className="flex items-center space-x-2">
                            <p className="text-gray-500 mr-2">Passenger</p>
                            |
                            <div className="rounded-full px-2 ml-5 text-sm text-green-600 bg-green-100">
                                <p className="">Verified</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="relative flex items-center border rounded-lg">
                        <input
                            type="text"
                            value={safetyInfo.email}
                            readOnly
                            className="w-full p-2 pr-24 border-none rounded-l-lg"
                        />
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1 pl-2 border-l">
                            <span className="text-gray-500 cursor-pointer" onClick={() => handleCopy(safetyInfo.email)}>Copy</span>
                            <ClipboardIcon
                                onClick={() => handleCopy(safetyInfo.email)}
                                className="h-6 w-6 text-gray-500 cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center border rounded-lg">
                        <input
                            type="text"
                            value={safetyInfo?.phone}
                            readOnly
                            className="w-full p-2 pr-24 border-none rounded-l-lg"
                        />
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1 pl-2 border-l">
                            <span className="text-gray-500 cursor-pointer" onClick={() => handleCopy(safetyInfo.phone)}>Copy</span>
                            <ClipboardIcon
                                onClick={() => handleCopy(safetyInfo.phone)}
                                className="h-6 w-6 text-gray-500 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Emergency Help */}
            <p className="text-red-600 text-center text-lg font-semibold mb-4">NEED Emergency Help!!</p>

            {/* Address */}
            <div className="mb-4 flex items-center justify-center">
                <svg className="h-6 w-6 text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8.686 2 6 4.686 6 8c0 3.314 4 8 6 10s6-6.686 6-10c0-3.314-2.686-6-6-6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z" />
                </svg>
                <p className="text-gray-700">1234 Street, Manchester United Kingdom</p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 justify-center">
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
                    Send Message
                </button>
                <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg shadow">
                    Decline
                </button>
            </div>
        </div>
    );
};

export default Safety;
