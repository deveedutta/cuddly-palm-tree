import React from 'react';

const UserPhoneNEmail = ({ user }) => {
  if (user) {
    return ( 
      <div>        
        <small>📞 Phone: {user.phone}</small>
        <br/>
        <small>📟 email: {user.email}</small>
        <br/>
        <small>💻 website: <a href={user.website} about="_blank">{user.website}</a></small>
        <br/>
      </div>
    )
  } else {
    return '';
  }
  
}

export default UserPhoneNEmail;