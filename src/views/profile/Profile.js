import React from 'react';
import PersonInfo from './children/personInfo/PersonInfo';
import ViewAvatar from './children/viewAvatar/ViewAvatar';

function Profile(props) {

  return (
    <div>
      <ViewAvatar></ViewAvatar>
      <PersonInfo ></PersonInfo>
    </div>
  );
}

export default Profile;