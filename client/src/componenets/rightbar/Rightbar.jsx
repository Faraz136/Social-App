import './rightbar.css';
import CakeIcon from '@mui/icons-material/Cake';
import { Avatar, IconButton } from '@mui/material';
import { Users } from '../../dymmyData';
import Online from '../online/Online';

export default function Rightbar({ Profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <IconButton>
            <CakeIcon />
          </IconButton>
          <span className="birtdayText">
            <b>Pola foster</b>
            and
            <b>3 frinds</b>
            have birthday today
          </span>
        </div>
        <img
          src="https://i.insider.com/5150710969beddc11500000b?width=750&format=jpeg&auto=webp"
          alt=""
          className="rightbarAd"
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const profileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle"> User Information </h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">RelationShip Status:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle"> User Followings </h4>
        <div className="rightbarFollowings">
          <div className="userFollowing">
            <IconButton>
              <Avatar src="https://i.insider.com/5cb8b133b8342c1b45130629?width=700" />
            </IconButton>
            <span className="rightbarFollowingName">Name</span>
          </div>
          <div className="userFollowing">
            <IconButton>
              <Avatar src="https://i.insider.com/5cb8b133b8342c1b45130629?width=700" />
            </IconButton>
            <span className="rightbarFollowingName">Name</span>
          </div>
          <div className="userFollowing">
            <IconButton>
              <Avatar src="https://i.insider.com/5cb8b133b8342c1b45130629?width=700" />
            </IconButton>
            <span className="rightbarFollowingName">Name</span>
          </div>
          <div className="userFollowing">
            <IconButton>
              <Avatar src="https://i.insider.com/5cb8b133b8342c1b45130629?width=700" />
            </IconButton>
            <span className="rightbarFollowingName">Name</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {Profile ? profileRightbar() : HomeRightbar()}
      </div>
    </div>
  );
}
