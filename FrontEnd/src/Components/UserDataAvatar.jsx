import { Avatar, Badge, Button } from "flowbite-react";
import React from "react";

const UserDataAvatar = ({ img, name, role, department, email, phone }) => {
  return (
    <Avatar img={img} rounded statusPosition="bottom-right" size="xl" className="space-x-8">
      <div className="space-y-1 font-medium dark:text-white">
        {/* User Name and Status */}
        <div className="flex items-center justify-between">
          <span>{name}</span>
          <Badge color="success" size="md" className="ml-4">Active</Badge>
        </div>
        
        {/* Role */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <strong>Role:</strong> {role}
        </div>

        {/* Department */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <strong>Department:</strong> {department}
        </div>

        {/* Email */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <strong>Email:</strong> {email}
        </div>

        {/* Phone */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <strong>Phone:</strong> {phone}
        </div>
        <Button pill outline >
        Edit Profile
      </Button>
      </div>
    </Avatar>
  );
};

export default UserDataAvatar;
