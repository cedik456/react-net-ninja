import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const deleteBlog = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      console.log("Blog Deleted Successfully");
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p>
            Written by <span>{blog.author}</span>
          </p>
          <div>{blog.body}</div>
          <button onClick={deleteBlog}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
