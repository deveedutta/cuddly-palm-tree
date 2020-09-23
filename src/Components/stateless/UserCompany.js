import React from 'react';

const UserCompany = ({ user }) => {
  if (user && user.company) {
    return (
      <small>
        <p>
          <span>name:  {user.company.name}</span>,
          <span>catchPhrase:  {user.company.catchPhrase}</span>,
          <span>bs:  {user.company.bs}</span>,
        </p>
      </small>
    )
  } else {
    return '';
  }
}

export default UserCompany;