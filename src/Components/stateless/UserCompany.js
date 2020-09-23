import React from 'react';

const UserCompany = ({ user }) => {
  if (user && user.company) {
    return (
      <small>
        <p>
          <span>🏭</span>
          <span>name:  {user.company.name}</span>
          <br/>
          <span>🐱 cat...ch phrase:  {user.company.catchPhrase}</span>,
          <br/>
          <span>🎼 bs:  {user.company.bs}</span>,
        </p>
      </small>
    )
  } else {
    return '';
  }
}

export default UserCompany;