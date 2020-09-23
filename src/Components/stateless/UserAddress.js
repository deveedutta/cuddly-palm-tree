import React from 'react';

const UserAddress = ({ user }) => {
  if (user && user.address) {
    return (
      <p>
        <span>🛑 street:  {user.address.street}</span>,
        <br/>
        <span>🏨 suite:   {user.address.suite}</span>,
        <br/>
        <span>🏙 city:    {user.address.city}</span>,
        <br/>
        <span>zipcode:  {user.address.zipcode}</span>,
      </p>
    )
  } else {
    return '';
  }
  
}

export default UserAddress;