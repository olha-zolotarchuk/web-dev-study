import React from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import api from "./api/posts";
import DataContext from "./context/DataContext";
import { useHistory } from "react-router-dom";

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const history = useHistory();
  const post = posts.find((post) => post.id.toString() === id);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      history.push("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <React.Fragment>
      <main className="PostPage">
        <article>
          {post && (
            <>
              <h2>{post.title}</h2>
              <p className="postDate">{post.datetime}</p>
              <p className="postBody">{post.body}</p>
              <Link to={`/edit/${post.id}`}>
                <button className="editButton">Edit Post</button>
              </Link>
              <button
                className="deleteButton"
                onClick={() => handleDelete(post.id)}
              >
                Delete post
              </button>
            </>
          )}
          {!post && (
            <>
              <h2>Post Not Found</h2>
              <p>Well, that's disappointing.</p>
              <p>
                <Link to="/">Visit Our Homepage</Link>
              </p>
            </>
          )}
        </article>
      </main>
    </React.Fragment>
  );
};

export default PostPage;
