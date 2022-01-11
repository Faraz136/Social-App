import './topbar.css';

import PersonIcon from '@mui/icons-material/Person';
import { IconButton, Avatar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Typography variant="h6" component="div">
          <Link className="link" to="/">
            <span className="logo">Social</span>
          </Link>
        </Typography>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="Search Friends/posts"
            className="searchInput"
          />
        </div>
      </div>
      <div className="tapbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">
            <IconButton>
              <HomeIcon />
            </IconButton>
          </span>

          <span className="topbarLink">
            <IconButton>
              <TimelineIcon />
            </IconButton>
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <IconButton>
              <PersonIcon />
            </IconButton>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <IconButton>
              <ChatIcon />
            </IconButton>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <IconButton>
              <NotificationsActiveIcon />
            </IconButton>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <IconButton>
          <Avatar src="/assets/person/6.jpg" />
        </IconButton>
      </div>
    </div>
  );
};

export default Topbar;
