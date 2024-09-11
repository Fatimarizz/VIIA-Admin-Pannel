import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import { PaperClipIcon } from '@heroicons/react/24/solid';
import { Download, FileIcon } from "lucide-react";
import { format, isToday, isYesterday, formatDistanceToNow } from 'date-fns';

const pusher = new Pusher('YOUR_PUSHER_KEY', {
    cluster: 'YOUR_PUSHER_CLUSTER',
});

export default function ChatSupport() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            user: 'Joseph Emmanuel',
            role: 'Driver',
            avatar: '/assets/user.svg',
            message: 'Hello, I have an issue with my trip.',
            fileUrl: null,
            time: '10:30 AM',
            date: '14 October, 2023',
            isSentByAdmin: false,
        },
        {
            id: 2,
            user: 'Joseph Emmanuel',
            role: 'Driver',
            avatar: '/assets/user.svg',
            message: 'Here’s a screenshot of the error.',
            fileUrl: '/assets/sample.png',
            fileSize: '1.1 MB',
            time: '10:35 AM',
            date: '14 October, 2023',
            isSentByAdmin: false,
        },
        {
            id: 3,
            user: 'You',
            role: 'Support',
            avatar: '',
            message: 'Thanks for sending that, we’ll look into it.',
            fileUrl: null,
            time: '10:40 AM',
            date: '14 October, 2023',
            isSentByAdmin: true,
        }
    ]);
    const [newMessage, setNewMessage] = useState('');
    const [newFile, setNewFile] = useState(null);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const channel = pusher.subscribe('chat');
        channel.bind('message', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => {
            pusher.unsubscribe('chat');
        };
    }, []);

    const handleSendMessage = () => {
        if (newMessage.trim() || newFile) {
            const newMsg = {
                id: messages.length + 1,
                user: 'You',
                role: 'Support',
                avatar: '',
                message: newMessage,
                fileUrl: newFile ? URL.createObjectURL(newFile) : null,
                time: new Date().toLocaleTimeString(),
                date: new Date().toISOString(),
                isSentByAdmin: true,
            };

            setMessages([...messages, newMsg]);
            setNewMessage('');
            setNewFile(null);

            // Send `newMsg` to backend to broadcast via Pusher
        }
    };

    const handleFileUpload = (e) => {
        setNewFile(e.target.files[0]);
    };

    const formatMessageDate = (messageDate) => {
        const date = new Date(messageDate);

        if (isToday(date)) return 'Today';
        if (isYesterday(date)) return 'Yesterday';
        return format(date, 'EEEE, MMMM d'); // Example: Thursday, October 14
    };

    const formatTime = (messageDate, isSentByAdmin) => {
        const date = new Date(messageDate);
        if (isSentByAdmin && formatDistanceToNow(date) < 60000) {
            return 'Just now';
        }
        return format(date, 'h:mm aa');
    };

    const groupedMessages = messages.reduce((acc, message) => {
        const formattedDate = formatMessageDate(message.date);
        if (!acc[formattedDate]) {
            acc[formattedDate] = [];
        }
        acc[formattedDate].push(message);
        return acc;
    }, {});

    return (
        <div className="flex flex-col  border shadow-lg rounded-lg h-[760px]">
            <div className="text-xl font-semibold mb-4 border-b p-4">Chat Support</div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto space-y-4 p-4">
                {Object.keys(groupedMessages).map((date) => (
                    <div key={date}>
                        <div className="text-center text-gray-500 text-sm mb-2">{date}</div>
                        {groupedMessages[date].map((msg) => (
                            <div key={msg.id} className={`flex ${msg.isSentByAdmin ? 'justify-end' : ''}`}>
                                <div className="flex space-x-3">
                                    {!msg.isSentByAdmin && (
                                        <img src={msg.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
                                    )}
                                    <div>
                                        <div className="text-sm">
                                            <span className="font-semibold capitalize">{msg.user}</span>
                                        </div>
                                        <div className={`p-2 rounded-lg text-sm ${msg.isSentByAdmin ? 'bg-green-500 text-white' : 'bg-gray-100'}`}>
                                            <p>{msg.message}</p>
                                            {msg.fileUrl && (
                                                <div className="mt-2 flex justify-between items-center bg-white rounded-lg px-2 space-x-2">
                                                    <div className='flex items-center space-x-2'>
                                                    <FileIcon className="w-5 h-5 text-primary-500 rounded-md shadow-md" />
                                                    <div>
                                                        <p className="text-sm text-gray-700">{msg.fileUrl.split('/').pop()}</p>
                                                        {msg.fileSize && <p className="text-xs text-gray-500">{msg.fileSize}</p>}
                                                    </div>
                                                    </div>

                                                    <button className="text-gray-500" onClick={() => handleDownload(msg.fileUrl)}>
                                                        <Download className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {formatTime(msg.date, msg.isSentByAdmin)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                    <div className="flex items-center space-x-2">
                        <img src="/assets/user.svg" alt="Avatar" className="w-10 h-10 rounded-full" />
                        <div className="text-gray-500 text-sm">Joseph Emmanuel is typing...</div>
                        <div className="dots flex space-x-1">
                            <span className="dot bg-gray-500 h-2 w-2 rounded-full"></span>
                            <span className="dot bg-gray-500 h-2 w-2 rounded-full"></span>
                            <span className="dot bg-gray-500 h-2 w-2 rounded-full"></span>
                        </div>
                    </div>
                )}
            </div>

            {/* Chat input and file upload section */}
            <div className="border-t p-2">
                <div className="flex flex-col space-y-2  p-2 ">
                    {/* Text Input */}
                    <textarea
                        className="w-full h-20 p-2 border rounded-lg resize-none"
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    {/* File Upload Icon */}
                    <div className="flex justify-between items-center">
                        <label className="cursor-pointer flex items-center space-x-2 text-gray-600">
                            <PaperClipIcon className="w-6 h-6" />
                            <input type="file" className="hidden" onChange={handleFileUpload} />
                            <span>Attach File</span>
                        </label>
                        <button
                            className="bg-primary-500 text-white px-9 py-2 rounded-lg"
                            onClick={handleSendMessage}
                        >
                            Send
                        </button>
                    </div>
                    {/* Show selected file name */}
                    {newFile && (
                        <div className="mt-2 text-sm text-gray-600">
                            <span>Selected file: {newFile.name}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function handleDownload(fileUrl) {
    window.open(fileUrl, '_blank');
}
