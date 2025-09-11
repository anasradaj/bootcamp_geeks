import React from 'react';

interface UserCardProps {
  name?: string; 
  age?: number;
  role?: string;
}

const UserCard: React.FC<UserCardProps> = ({ 
  name = 'Guest User', 
  age = 'N/A', 
  role = 'User' 
}) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default UserCard;