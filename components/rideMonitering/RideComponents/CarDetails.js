import React from "react";

const CarDetails = ({ carData }) => {
    const carImages = [
        '/assets/car_image1.svg',
        '/assets/car_image1.svg',
        '/assets/car_image3.svg',
        '/assets/car_image3.svg',
    ];

    return (
        <div className="p-4">
            <h4 className="font-semibold text-lg mb-4">Car Details</h4>
            <div className="flex flex-col ">
                <div className="flex items-center gap-4">
                    <div>
                        <img
                            src='/assets/car_image2.svg'
                            alt={`Car`}
                            className="w-full h-44"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                    {carImages.map((image, index) => (
                        <div key={index} className="">
                            <img
                                src={image}
                                alt={`Car ${index + 1}`}
                                className="w-44 h-full object-cover"
                            />
                        </div>
                    ))}
                    </div>
                </div>
                <div className="space-y-4 my-4">
                    <div className="flex space-x-8">
                        <div>
                            <p className="font-semibold">Car Model:</p>
                            <p>{carData.model}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Car Color:</p>
                            <p>{carData.color}</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">License Number:</p>
                        <p>{carData.licenseNumber}</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <img src={'/assets/car_info.svg'} alt="Feature" className="ml-3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
