import React from 'react';
import Feed from '../../componenets/feed/Feed';
import Rightbar from '../../componenets/rightbar/Rightbar';
import Sidebar from '../../componenets/sidebar/Sidebar';
import Topbar from '../../componenets/topbar/Topbar';

import './home.css';

const Home = () => {
  return (
    <div>
      <Topbar></Topbar>
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
