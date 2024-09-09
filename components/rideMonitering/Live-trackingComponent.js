import { useRouter } from 'next/router';
import { useState } from 'react';
import { LockKeyhole } from 'lucide-react';
import { useFormik } from 'formik';
import React from 'react';
import { SearchIcon } from 'lucide-react';
import TripStatus from './RideComponents/TripStatus';
import CarDetails from './RideComponents/CarDetails';
import DriverInfo from './RideComponents/DriverInfo';
import PassengerInfo from './RideComponents/PassengerInfo';
import Safety from './RideComponents/Safety';
import dynamic from 'next/dynamic';

const LiveTrackingMap = dynamic(() => import('@/components/rideMonitering/LiveTrackingMap'), {
  ssr: false,
});
export default function LivetrackingComponent() {
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [tripCategory, setTripCategory] = useState('in-transit');

  const handleTabChange = (index) => {
    setCurrentTab(index);
  };

  const tripData = [
    {
      id: "0121",
      status: 'in-transit',
      tripStatus: {
        distanceCovered: "25 miles",
        startPoint: "Downtown",
        currentLocation: "Hamilton Road, Manchester, England.",
        endPoint: "Airport",
        date: "August 19, 2024",
        startTime: "08:00 AM",
        estimatedEndTime: "09:00 AM",
        price: "$30.00",
      },
      carDetails: {
        model: "Tesla Model S",
        color: "Red",
        price: "$70,000",
        licenseNumber: "ABC1234",
        imageUrl: "https://example.com/car.jpg",
      },
      driverInfo: {
        phone: "09-000-3333-4444",
        email: "john@example.com",
        dob: "20 /04/ 2001",
        gender: 'Male',
      },
      passengerInfo: [
        { name: "Alice", email: "alice@example.com" },
        { name: "Bob", email: "bob@example.com" },
      ],
      safetyInfo: {
        phone: "09-000-3333-4444",
        email: "john@example.com",
      },
    },
    {
      id: "0122",
      status: 'in-transit',
      tripStatus: {
        distanceCovered: "40 miles",
        startPoint: "Uptown",
        currentLocation: "Westside Road, London, England.",
        endPoint: "Central Station",
        date: "August 20, 2024",
        startTime: "09:00 AM",
        estimatedEndTime: "10:00 AM",
        price: "$35.00",
      },
      carDetails: {
        model: "BMW 5 Series",
        color: "Black",
        price: "$55,000",
        licenseNumber: "XYZ5678",
        imageUrl: "https://example.com/bmw.jpg",
      },
      driverInfo: {
        phone: "09-111-2222-3333",
        email: "jane@example.com",
        dob: "15 /03/ 1995",
        gender: 'Female',
      },
      passengerInfo: [
        { name: "Charlie", email: "charlie@example.com" },
        { name: "David", email: "david@example.com" },
      ],
      safetyInfo: {
        phone: "09-111-2222-3333",
        email: "jane@example.com",
      },
    },
    {
      id: "0123",
      status: 'on-hold',
      tripStatus: {
        distanceCovered: "15 miles",
        startPoint: "Northside",
        currentLocation: "Park Avenue, New York, USA.",
        endPoint: "Grand Central",
        date: "August 21, 2024",
        startTime: "07:00 AM",
        estimatedEndTime: "08:00 AM",
        price: "$40.00",
      },
      carDetails: {
        model: "Audi A6",
        color: "Blue",
        price: "$60,000",
        licenseNumber: "LMN3456",
        imageUrl: "https://example.com/audi.jpg",
      },
      driverInfo: {
        phone: "09-555-6666-7777",
        email: "jack@example.com",
        dob: "10 /10/ 1980",
        gender: 'Male',
      },
      passengerInfo: [
        { name: "Eve", email: "eve@example.com" },
        { name: "Frank", email: "frank@example.com" },
      ],
      safetyInfo: {
        phone: "09-555-6666-7777",
        email: "jack@example.com",
      },
    },
  ];

  const formik = useFormik({
    initialValues: {
      tripId: '',
    },
    onSubmit: (values) => {
      // Simulate filtering trips by entered trip ID
      if (values.tripId) {
        const filteredTrips = tripData.filter((trip) => trip.id === values.tripId);
        setFilteredTrips(filteredTrips);
      } else {
        // Show all trips in the selected category
        filterTripsByCategory(tripCategory);
      }
    },
  });

  const [filteredTrips, setFilteredTrips] = useState([]);

  const handleTrackNowClick = (trip) => {
    setSelectedTrip(trip);
  };
  const handleCategoryChange = (category) => {
    setTripCategory(category);
    filterTripsByCategory(category);
  };

  const filterTripsByCategory = (category) => {
    const filtered = tripData.filter((trip) => trip.status === category);
    setFilteredTrips(filtered);
  };

  // Load trips on initial render
  useState(() => {
    filterTripsByCategory(tripCategory);
  }, []);
  const tabList = ["Trip Status", "Car Details", "Driver Info", "Passenger Info", "Safety"];

  const userType = 'ongoing';
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/ride-monitering");
  };


  return (
    <div className='p-4 px-6'>
      <div className='flex justify-between'>
        <h2 className="font-semibold text-slate-600 text-base ">
          <span className=" cursor-pointer" onClick={handleGoBack}>
            Ride Monitoring
          </span>{"   "}
          &gt;   <span className="text-green-500"> Live Tracking </span>
        </h2>
        <div>
          <button className="bg-[#4E5BA6] text-white rounded-md px-2 py-2 flex">
            <LockKeyhole className="mr-2" />
            Safety Button
          </button>
        </div>
      </div>
      <div className=" mb-4">
        <h2 className="font-semibold text-lg">
          Live Tracking
        </h2>
        <p className="text-sm">View and manage all ongoing trips, live tracking.
        </p>
      </div>
      <div className="">
        <LiveTrackingMap trip={selectedTrip} />
      </div>
      <div className='grid grid-cols-5 gap-2 mt-6 '>

        {/* Left Side: Trip ID Input Form */}
        <div className='col-span-2 border rounded-lg shadow-md p-3'>
          <h2 className='text-xl font-semibold'>
            Live Tracker
          </h2>
          <p>
            Tracking rides using trip ID
          </p>

          <form onSubmit={formik.handleSubmit}>
            <div className="my-4 border-b-2 pb-5">
              <div className="flex mr-6 relative border rounded-lg">
                <SearchIcon className="absolute left-2 top-2 h-6 w-5 text-gray-400" />
                <input
                  id="tripId"
                  name="tripId"
                  placeholder='Enter Trip ID'
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.tripId}
                  className="mt-1 block w-full px-4 py-2 focus:outline-none ml-6"
                />
              </div>
            </div>
          </form>

          <div className='grid grid-cols-2 p-1 bg-slate-50 mb-4 w-60'>
            <button
              className={`cursor-pointer text-center py-2 px-4   ${tripCategory === 'in-transit' ? 'bg-white border rounded-lg text-black shadow-md' : ' text-[#667085]'}`}
              onClick={() => handleCategoryChange('in-transit')}
            >
              In Transit
            </button>
            <button
              className={`cursor-pointer text-center py-2 px-4   ${tripCategory === 'on-hold' ? 'bg-white border rounded-lg text-black shadow-md' : ' text-[#667085]'}`}
              onClick={() => handleCategoryChange('on-hold')}
            >
              On Hold
            </button>
          </div>
          {filteredTrips.length > 0 && filteredTrips.map((trip, index) => (
            <div
              key={index}
              className={`rounded-xl border shadow-md p-3 mb-4 ${selectedTrip && selectedTrip.id === trip.id ? 'border-green-500' : 'border-gray-300'}`}
            >
              <span>Trip Code/ID </span>
              <h2 className='text-xl font-semibold'>
                {trip.id}
              </h2>
              <input
                type="text"
                value={trip.tripStatus.currentLocation}
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              <button
                onClick={() => handleTrackNowClick(trip)}
                className={`rounded-md px-4 py-2 mt-3 ${selectedTrip && selectedTrip.id === trip.id ? 'bg-green-500 text-white' : 'bg-slate-50 text-green-500'}`}
              >
                {selectedTrip && selectedTrip.id === trip.id ? 'Tracking' : 'Track Now'}
              </button>
            </div>
          ))}

        </div>

        {/* Right Side: Display Tracking Details */}
        <div className='border col-span-3 rounded-md shadow-md p-3 min-h-[600px]'>

          <div className='flex space-x-3 mt-3 pb-5 border-b'>
            <h2>
              <span className="font-semibold">Trip Code: </span>
              {selectedTrip?.id}
              
            </h2>

            <div
              className={`px-4 py-1 rounded-lg text-sm font-semibold ${userType === "ongoing" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                }`}
            >
              {userType === "ongoing" ? "In-progress" : "Completed"}
            </div>
          </div>


          <div className="grid grid-cols-5 gap-2 border-b bg-gray-100  border-gray-300">
            {tabList.map((tab, index) => (
              <div
                key={index}
                onClick={() => handleTabChange(index)}
                className={`cursor-pointer text-center py-2 px-4  ${currentTab === index ? "bg-white border rounded-lg text-black shadow-md" : "bg-gray-100 text-[#667085]"
                  }`}
              >
                {tab}
              </div>
            ))}
          </div>
          {selectedTrip ? (
            <>
              {currentTab === 0 && <TripStatus tripData={selectedTrip.tripStatus}  id={selectedTrip.id}/>}
              {currentTab === 1 && <CarDetails carData={selectedTrip.carDetails} />}
              {currentTab === 2 && <DriverInfo driverData={selectedTrip.driverInfo} />}
              {currentTab === 3 && <PassengerInfo passengers={selectedTrip.passengerInfo} />}
              {currentTab === 4 && <Safety safetyInfo={selectedTrip.safetyInfo} />}

            </>
          ) : (
            <div className='text-center my-12'>
              <p>Oops!! No trip selected</p>
              <h2 className='font-semibold'>
                Please click a trip on the map or search for the trip code begin live tracking .
              </h2>              </div>

          )}
        </div>
      </div>
    </div>
  );
}
