import { Avatar, IconButton } from '@mui/material';
import React from 'react';

function CloseFriends({ user }) {
  return (
    <li className="sidebarFriend">
      <IconButton>
        <Avatar src={user.profilePicture} />
      </IconButton>
      <span className="sidebarFriendName"> {user.username} </span>
    </li>
  );
}

export default CloseFriends;
