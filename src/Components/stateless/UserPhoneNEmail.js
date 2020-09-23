import React from 'react';

const UserPhoneNEmail = ({ user }) => {
  if (user) {
    return ( 
      <small>
        Phone: {user.phone}
        <br/>
        email: {user.email}
        <br/>
        website: <a href={user.website} about="_blank">{user.website}</a>
        <br/>
      </small>
    )
  } else {
    return '';
  }
  
}

export default UserPhoneNEmail;