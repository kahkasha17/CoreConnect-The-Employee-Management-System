import { Card } from 'flowbite-react';
import React from 'react';
import UserDataAvatar from './UserDataAvatar'; // Ensure this path is correct

export const UserdataCard = () => {
    return (
      <Card className="flex items-center max-w-sm border-l-8 border-cyan-500 ... h-full"  horizontal>

   
          <UserDataAvatar img="/Homeback.jpg" name='Kahkasha Rafat Fatima'role="" department="" email="" phone="" /> {/* Avatar component */}
          
        </Card>
    );
}

export default UserdataCard