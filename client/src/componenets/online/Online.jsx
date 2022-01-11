import { Avatar, IconButton } from '@mui/material';

import './online.css';

function Online({ user }) {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImageContainer">
          <IconButton>
            <Avatar src={user.profilePicture}></Avatar>
            <span className="rightbarOnline"></span>
          </IconButton>
          <div className="rightbarUsername"> {user.username} </div>
        </div>
      </li>
    </div>
  );
}

export default Online;
