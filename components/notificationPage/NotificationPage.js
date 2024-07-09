import React, { useState } from 'react';
import Button from '../ui/buttonComponent';
import { CircleIcon } from 'lucide-react';

export default function NotificationPage() {
    const [currentTopNavigationLink, setCurrentTopNavigationLink] = useState(0);

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
        <div className="bg-white w-full min-h-screen px-4" >


            <div className="grid grid-cols-4 gap-5  text-center px-4 py-4 mt-4 rounded-md w-full justify-between border-[1px] border-gray-900/30">
                {notificationTypes.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleNotificationClick(index)}
                        className={`flex gap-2 ease-in-out duration-300 cursor-pointer ${currentTopNavigationLink === index
                            ? "shadow-lg text-black ring-1 ring-gray-900/10"
                            : "text-gray-500"
                            } rounded-md items-center py-2 justify-center px-2 text-xs lg:text-sm font-semibold`}
                    >
                        {item.type}
                        <p className="w-12 h-7 flex relative items-center justify-center bg-[#F2F4F7] rounded-full">
                            {item.notifications.length}
                        </p>
                    </div>
                ))}
            </div>
            <div className=" mt-4 flex flex-col gap-4">
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
                                <Button label="Marked as resolved" buttonClass="text-sm hover:bg-gray-900/40 hover:text-white w-[170px] p-2 bg-white border-[1px] border-gray-900/20 !text-black" onClick={handleSubmit} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}
