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
                    <div className="flex gap-8">
                        <img className="cursor-pointer" src="/assets/security.svg" />
                        <img className="cursor-pointer" src=" /assets/messages.svg" />
                        <img
                            className="cursor-pointer"
                            src="/assets/notification.svg"
                            onClick={handleNotificationClick} // Open notification modal on click
                        />
                        {data && <UserMenu data={data} />}
                    </div>
                </div>
            </div>
            {showNotificationModal && < NotificationComponent onClose={() => setShowNotificationModal(false)} />}
        </header>
    );
};

export default Header;
