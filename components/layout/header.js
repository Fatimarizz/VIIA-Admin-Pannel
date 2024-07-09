import React, { useState } from 'react';
import UserMenu from './userMenu';
import NotificationComponent from './notificationModal';
const Header = ({ title, subheading }) => {
    const [showNotificationModal, setShowNotificationModal] = useState(false); // State for modal visibility

    const data = {
        name: 'Ali',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg'
    };

    const handleNotificationClick = () => {
        setShowNotificationModal(true); // Open the notification modal
    };

    return (
        <header className="h-18 px-6 py-3 bg-white">
            <div className="relative">
                <div className="flex justify-between py-4 px-4">
                    <div className="flex items-center">
                        {/* <img src="/assets/hamburger.svg" /> */}
                        <h1 className="font-bold text-xl">{title}</h1>
                    </div>
                    <div className="flex gap-8 items-center">
                        <img className="cursor-pointer  h-6 w-6" src="/assets/security.svg" />
                        <img className="cursor-pointer  h-6 w-6" src=" /assets/messages.svg" />
                        <div className='relative'>
                            <p className='bg-red-500 text-xs rounded-full p-1 px-2 text-white absolute -right-2 -top-4 '>
                                6
                            </p>
                        <img
                            className="cursor-pointer h-6 w-6"
                            src="/assets/notification.svg"
                            onClick={handleNotificationClick} // Open notification modal on click
                        />
                        </div>
                        {data && <UserMenu data={data} />}
                    </div>
                </div>
            </div>
            {showNotificationModal && < NotificationComponent onClose={() => setShowNotificationModal(false)} />}
        </header>
    );
};

export default Header;
