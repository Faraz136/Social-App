import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useEffect, useState } from 'react';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

import './post.css';
import axios from 'axios';

function Post({ post }) {
  const [likeCount, setLikeCount] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`users/${post.userId}`);

      setUser(data);
    };
    fetchData();
  }, [post.userId]);

  const likeHandler = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
      setIsLiked(true);
    } else {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    }
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <IconButton>
              <Link to={`/profile/${user.username}`}>
                <Avatar
                  src={
                    user.profilePicture ||
                    'https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png'
                  }
                />
              </Link>
              <span className="postUsername"> {user.username} </span>
            </IconButton>
            <span className="postDate"> {format(post.createdAt)} </span>
          </div>
          <div className="postTopRight">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> {post.discription || ''} </span>
          <img src={post.img} alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <IconButton onClick={likeHandler}>
              {' '}
              <ThumbUpIcon htmlColor=" #3d8aed" />{' '}
            </IconButton>
            <IconButton onClick={likeHandler}>
              {' '}
              <FavoriteIcon htmlColor="#ed5b5b" />{' '}
            </IconButton>
            <spa className="postLikeCounter">
              {' '}
              {post.likes.length} People likes this
            </spa>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
