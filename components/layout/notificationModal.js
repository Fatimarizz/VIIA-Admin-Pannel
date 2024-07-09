import React, { useState } from 'react';
import Button from '../ui/buttonComponent';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { CircleIcon } from 'lucide-react';

export default function NotificationComponent({ onClose }) {
    const [currentTopNavigationLink, setCurrentTopNavigationLink] = useState(0);
    const router = useRouter()

    const notificationTypes = [
        {
            type: "Verifications",
            notifications: [
                {
                    id: 1,
                    message: 'Joseph Emma just submitted his details for verification as a Driver.',
                    timestamp: '3 hrs ago',
                },
                {
                    id: 2,
                    message: 'Joseph Emma just submitted his details for verification as a Driver.',
                    timestamp: '6 hrs ago',
                },
                {
                    id: 3,
                    message: 'Joseph Emma just submitted his details for verification as a Driver.',
                    timestamp: '1 hrs ago',
                },
                // Add more verification type notifications as needed
            ]
        },
        {
            type: "Support",
            notifications: [
                {
                    id: 2,
                    message: 'New support ticket created.',
                    timestamp: '2 hrs ago',
                },
                // Add more support type notifications as needed
            ]
        },
        {
            type: "Emergencies",
            notifications: [
                {
                    id: 3,
                    message: 'Emergency alert: Fire reported near the office.',
                    timestamp: '1 hr ago',
                },
                // Add more emergency type notifications as needed
            ]
        },
        {
            type: "Reviews",
            notifications: [
                {
                    id: 4,
                    message: 'You received a new product review.',
                    timestamp: '30 mins ago',
                },
                // Add more review type notifications as needed
            ]
        },
    ];

    const handleNotificationClick = (index) => {
        setCurrentTopNavigationLink(index);
    };

    const handleClose = () => {
        onClose();
    };

    const handleSubmit = () => {
        // Handle view or resolve action for the notification
    };

    const renderNotificationType = (type) => {
        switch (type) {
            case 'Verifications':
                return (
                    <>

                        Verification
                    </>
                );
            case 'Support':
                return (
                    <>

                        Support
                    </>
                );
            case 'Emergencies':
                return (
                    <>

                        Support & Helpdesk
                    </>
                );
            case 'Reviews':
                return (
                    <>

                        Reviews
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="absolute right-0 mt-2 py-3 max-w-2xl border  bg-white rounded-lg shadow-lg z-10">
            <div className="px-4 py-2 ">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Notifications</h3>
                    <XMarkIcon className="h-5 w-5 cursor-pointer" onClick={handleClose} />
                </div>
            </div>

            <div className="flex gap-4 px-4 py-4 mt-4 rounded-md w-full justify-between border-y-[1px] border-gray-900/30">
                {notificationTypes.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleNotificationClick(index)}
                        className={`flex gap-2 ease-in-out duration-300 cursor-pointer ${currentTopNavigationLink === index
                            ? "shadow-lg text-black ring-1 ring-gray-900/10"
                            : "text-gray-500"
                            } rounded-md items-center py-2 px-2 text-xs lg:text-sm font-semibold`}
                    >
                        {item.type}
                        <p className="w-12 h-7 flex relative items-center justify-center bg-[#F2F4F7] rounded-full">
                            {item.notifications.length}
                        </p>
                    </div>
                ))}
            </div>
            <div className="px-4 mt-4 overflow-y-scroll h-[300px] flex flex-col gap-4">
                {notificationTypes[currentTopNavigationLink]?.notifications.map((notification, index) => (
                    <div key={index} className="flex gap-4 border-b-[1px] border-gray-900/30 pb-4">
                        <div>
                            <img
                                className="rounded-full h-8 w-8 mt-2 object-cover"
                                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
                                alt="Avatar"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className='flex items-center space-x-3'>
                                <p className="text-[16px]">{notification.message}</p>
                                {notificationTypes[currentTopNavigationLink]?.type === 'Emergencies' ?
                                    <CircleIcon className='h-4  text-red-400 w-4 fill-red-400 mt-1' />
                                    :

                                    <CircleIcon className='h-4  text-green-400 w-4 fill-green-400 mt-1' />
                                }
                            </div>
                            <div className="flex items-center gap-3 text-[13px]">
                                <p>{notification.timestamp}</p>
                                <div className="h-4 w-[1px] bg-gray-400"></div>
                                <div className="flex items-center gap-[3px]">
                                    <img src="/assets/verification.svg" alt="Emergency Icon" className="h-5 w-5 mr-1" />
                                    {renderNotificationType(notificationTypes[currentTopNavigationLink]?.type)}

                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Button label="View" buttonClass="text-sm w-[70px] p-2" onClick={handleSubmit} />
                                <Button label="Marked as resolved" buttonClass="text-sm hover:bg-gray-900/40 !hover:text-white w-[170px] p-2 bg-white border-[1px] border-gray-900/20 !text-black" onClick={handleSubmit} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <Button
                    label="View all"
                    buttonClass="text-sm hover:bg-gray-900/40 hover:text-white w-[170px] p-2 bg-white border-[1px] border-gray-900/20 !text-black"
                    onClick={() => { router.push("/notifications") }}
                />
            </div>
        </div>

    )
}
