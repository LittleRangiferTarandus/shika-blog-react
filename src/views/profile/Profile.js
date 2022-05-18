import React from 'react';
import MyBlogs from './children/myBlogs/MyBlogs';
import PersonInfo from './children/personInfo/PersonInfo';
import ViewAvatar from './children/viewAvatar/ViewAvatar';
import Activate from './children/activate/Activate'
function Profile(props) {
  return (
    <div>
      <ViewAvatar></ViewAvatar>
      <PersonInfo ></PersonInfo>
      <Activate></Activate>
      <MyBlogs></MyBlogs>
    </div>
  );
}

export default Profile;