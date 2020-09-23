import React from 'react';

const UserThumbnail = ({ user }) => {
  if (user) {
    return (
      <div>
        <h4><a href={ '/user/u' + user.id }>{user.name}</a></h4>
        <h3>{user.username}</h3>
      </div>
    )
  } else {
    return '';
  }
  
}

export default UserThumbnail;