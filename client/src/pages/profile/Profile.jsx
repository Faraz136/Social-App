import './profile.css';
import Feed from '../../componenets/feed/Feed';
import Rightbar from '../../componenets/rightbar/Rightbar';
import Sidebar from '../../componenets/sidebar/Sidebar';
import Topbar from '../../componenets/topbar/Topbar';

function Profile() {
  return (
    <div>
      <Topbar></Topbar>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="https://www.aconsciousrethink.com/wp-content/uploads/2021/02/private-person.jpg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Name</h4>
              <span className="profileInfoDesc">helloe my phrands</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={'nino'} />
            <Rightbar Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
