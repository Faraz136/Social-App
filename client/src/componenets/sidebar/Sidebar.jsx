import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import { Button, IconButton } from '@mui/material';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import { Users } from '../../dymmyData';
import CloseFriends from '../closeFriends/CloseFriends';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <IconButton>
              <RssFeedIcon />
              <span className="sidebarListItemText">Feed</span>
            </IconButton>
          </li>
          <li className="sidebarListItem">
            <IconButton>
              <ChatIcon />
              <span className="sidebarListItemText">Chat</span>
            </IconButton>
          </li>
          <li className="sidebarListItem">
            <IconButton>
              <OndemandVideoIcon />
              <span className="sidebarListItemText">Videos</span>
            </IconButton>
          </li>
          <li className="sidebarListItem">
            <IconButton>
              <GroupIcon />
              <span className="sidebarListItemText">Group</span>
            </IconButton>
          </li>
          <li className="sidebarListItem">
            <IconButton>
              <BookmarksIcon />
              <span className="sidebarListItemText">Bookmarks</span>
            </IconButton>
          </li>
          <li className="sidebarListItem">
            <IconButton>
              <HelpOutlineIcon />
              <span className="sidebarListItemText">FAQ's</span>
            </IconButton>
          </li>
          <li className="sidebarListItem">
            <IconButton>
              <WorkIcon />
              <span className="sidebarListItemText">Jobs</span>
            </IconButton>
          </li>
          <li className="sidebarListItem">
            <IconButton>
              <EventIcon />
              <span className="sidebarListItemText">Events</span>
            </IconButton>
          </li>
        </ul>
        <Button fullWidth>Show more</Button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
