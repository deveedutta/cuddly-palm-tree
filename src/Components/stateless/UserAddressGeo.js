import React from 'react';

const UserAddressGeo = ({ user }) => {
  return (
    <code>
      <span>lat:  {user.address.geo.lat}</span>,
      <span>lng:  {user.address.geo.lng}</span>,
    </code>
  )
}

export default UserAddressGeo;