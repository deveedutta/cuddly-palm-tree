import React from 'react';

const UserAddress = ({ user }) => {
  if (user && user.address) {
    return (
      <p>
        <span>street:  {user.address.street}</span>,
        <span>suite:   {user.address.suite}</span>,
        <span>city:    {user.address.city}</span>,
        <span>zipcode:  {user.address.zipcode}</span>,
      </p>
    )
  } else {
    return '';
  }
  
}

export default UserAddress;