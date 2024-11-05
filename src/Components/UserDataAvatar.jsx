import { Avatar, Badge } from "flowbite-react";
import React from "react";

const UserDataAvatar = ({ img }) => {
  return (
    <Avatar img={img} rounded status="online" statusPosition="bottom-right" size="lg" className="space-x-8">
      <div className="space-y-1   font-medium dark:text-white">
        <div className="flex items-center justify-between"> {/* Use flexbox to align items */}
          <span>Kahkasha Rafat Fatima</span>
          <Badge color="success" className="ml-2">Active</Badge> {/* Add margin-left to the badge */}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Joined in August 2014
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Joined in August 2014
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Joined in August 2014
        </div>
      </div>
    </Avatar>
  );
};

export default UserDataAvatar;
