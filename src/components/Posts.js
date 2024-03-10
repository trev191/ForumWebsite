import './Posts.css';
import { useState, useEffect } from 'react';

const postDatabase = ["Post 0", "Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"];

function buildPostList(searchText) {
  const postListFromDatabase = postDatabase.filter(post => post.toLowerCase().includes(searchText.toLowerCase()))
                                           .map(post => <li class="list-group-item">{post}</li>);

  return (
    <ul class="list-group">
      {postListFromDatabase}
    </ul>
  );
}

function Posts({ searchText }) {
  const [postList, setPostList] = useState(null)

  useEffect(() => {
    setPostList(buildPostList(''));
  }, []);

  useEffect(() => {
    setPostList(buildPostList(searchText));
  }, [searchText]);

  return (
    <div className="PostList">
      {postList}
    </div>
  );
}

export default Posts;