import './Posts.css';
import { useState, useEffect } from 'react';

const postDatabase = ["Post 0", "Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"];

function buildPostList() {
  const postListFromDatabase = postDatabase.map(post => <li class="list-group-item">{post}</li>);

  return (
    <ul class="list-group">
      {postListFromDatabase}
    </ul>
  )
}

function Posts() {
  const [postList, setPostList] = useState(null)

  useEffect(() => {
    setPostList(buildPostList());
  }, []);

  return (
    <div className="PostList">
      {postList}
    </div>
  )
}

export default Posts;