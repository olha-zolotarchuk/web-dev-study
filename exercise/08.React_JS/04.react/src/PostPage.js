import React from "react";
import { useParams, Link } from "react-router-dom";
// import { useContext } from "react";
// import api from "./api/posts";
// import DataContext from "./context/DataContext";
import { useHistory } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import Missing from "./Missing";

const PostPage = () => {
  // const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const history = useHistory();
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);
  // const post = posts.find((post) => post.id.toString() === id);
  const post = getPostById(id);

  const handleDelete = async (id) => {
    deletePost(id);
    history.push("/");
    // try {
    //   await api.delete(`/posts/${id}`);
    //   const postsList = posts.filter((post) => post.id !== id);
    //   setPosts(postsList);
    //   history.push("/");
    // } catch (err) {
    //   console.log(`Error: ${err.message}`);
    // }
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
          {!post && <Missing title="Post Not Found" />}
        </article>
      </main>
    </React.Fragment>
  );
};

export default PostPage;
