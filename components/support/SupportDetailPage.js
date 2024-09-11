import React from 'react'
import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { ArrowLeft, Download, Image as ImageIcon, Video as VideoIcon } from "lucide-react";
import ChatSupport from './ChatSupport';
import Link from 'next/link';

export default function SupportDetailPage() {
  
    return (
        <div className='px-5 py-2'>
            <div className='mb-3'>
                <h2 className="font-semibold text-slate-600 text-sm pl-4">
                    <Link
                        className=" flex space-x-2 items-center cursor-pointer text-green-500"
                      href={'/support'}
                    >
                        <ArrowLeft className='mr-2'/>
                        All Messages
                    </Link>
                  
                </h2>
            </div>
            <div className='grid grid-cols-5  gap-7'>
                <div className='col-span-3'>
                    <ChatSupport />
                </div>
                <div className='col-span-2'>
                    <div className="p-6  border shadow-xl rounded-xl h-fit">
                        <h2 className="text-xl font-semibold">View Issue Details</h2>
                        <div className="grid grid-cols-2 my-4" >
                            <div >
                                <p className="font-semibold">Trip ID</p>
                                <p>1203</p>
                            </div>
                            <div>
                                <p className="font-semibold">Date Created:</p>
                                <p>14 October, 2023</p>
                            </div>
                            <div>
                                <p className="font-semibold">Ticket Id:</p>
                                <p>14 October, 2023</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 mt-6">
                            <p className="text-base font-semibold">User Information</p>
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


                        <p>Attached Files</p>
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
                        <div className="my-3">
                            <h2 className="text-lg font-semibold">Issue Decription</h2>
                            <p className="text-sm">Sample issue desription, Sample issue desription, Sample issue desription. Sample issue desription. Sample issue desription.Sample issue desription</p>
                        </div>
                        <div className="flex justify-end space-x-2 border-t border-gray-200 pt-4">
                            <button className="bg-white text-black px-3 py-1 rounded-md" >
                                Close Ticket
                            </button>
                            <button className="bg-primary-500 text-white px-3 py-1 rounded-md" >
                                Mark as resolved
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
