import { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import axios from 'axios';
export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (username) {
          const { data } = await axios.get(`posts/profile/${username}`);
          setPosts(data);
        } else {
          const { data } = await axios.get(
            'posts/timeline/61c460f9cfe5ab1dd5ec8cc3'
          );
          setPosts(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share />
        {posts.map((p) => {
          return <Post key={p._id} post={p} />;
        })}
      </div>
    </div>
  );
}
