import { Avatar } from 'flowbite-react'
import React from 'react'

export const UserAvatar = ({ img, name }) => {
  return (
       <div className="text-center font-medium dark:text-white">
      <Avatar img={img} rounded size="xl" bordered color="info" />
      <div className="mt-2">{name}</div>
    </div>
  )
};

export default UserAvatar; // Default export

