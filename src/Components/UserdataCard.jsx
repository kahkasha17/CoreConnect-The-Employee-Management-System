import { Card } from 'flowbite-react';
import React from 'react';
import UserDataAvatar from '../Components/UserDataAvatar'; // Ensure this path is correct

export const UserdataCard = () => {
    return (
        <Card className="flex items-center" horizontal >
          <UserDataAvatar img="/Homeback.jpg" name='Kahkasha Rafat Fatima'role="" department="" email="" phone="" /> {/* Avatar component */}
          
        </Card>
    );
}
