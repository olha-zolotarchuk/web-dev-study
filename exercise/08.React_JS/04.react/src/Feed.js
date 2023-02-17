import React from "react";
import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <React.Fragment>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </React.Fragment>
  );
};

export default Feed;
