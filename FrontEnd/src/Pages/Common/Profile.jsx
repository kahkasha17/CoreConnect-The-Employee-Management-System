import React from "react";
import UserdataCard from "../../Components/UserdataCard";
import UserAvatar from "../../Components/UserAvatar";
import { Card } from "flowbite-react";

const Profile = () => {
  return (
    <>
      <div className="bg-slate-600 p-4 rounded-lg">
        <UserAvatar />
        <h1 className=" text-white text-center">Kahkasha Rafat Fatima</h1>
        <h6 className=" text-white text-center">Employee ID: 2456789t76</h6>
      </div>

      <div className="p-6 min-w-full mx-auto bg-white shadow-md rounded-lg mt-6 ">
        <h2 className="text-xl font-semibold mb-4">Employee Profile</h2>
        <div className="space-y-4">
          {/* Name Row */}
          <div className="flex items-center gap-4 overflow-hidden">
            <label className="text-gray-700 font-medium w-28">Name:</label>
            <span className="text-gray-900 flex-1 truncate">John Doe</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Edit
            </button>
          </div>
          {/* Profile Row */}
          <div className="flex items-center gap-4 overflow-hidden">
            <label className="text-gray-700 font-medium w-28">Profile:</label>
            <span className="text-gray-900 flex-1 truncate">
              Software Engineer
            </span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Edit
            </button>
          </div>
          {/* Department Row */}
          <div className="flex items-center gap-4 overflow-hidden">
            <label className="text-gray-700 font-medium w-28">
              Department:
            </label>
            <span className="text-gray-900 flex-1 truncate">Development</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Edit
            </button>
          </div>
          {/* Email Row */}
          <div className="flex items-center gap-4 overflow-hidden">
            <label className="text-gray-700 font-medium w-28">Email:</label>
            <span className="text-gray-900 flex-1 truncate">
              john.doe@example.com
            </span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Edit
            </button>
          </div>
          {/* Phone Row */}
          <div className="flex items-center gap-4 overflow-hidden">
            <label className="text-gray-700 font-medium w-28">Phone:</label>
            <span className="text-gray-900 flex-1 truncate">123-456-7890</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
