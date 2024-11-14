import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p>
            Written by: <span>{blog.author}</span>
          </p>
          <body>{blog.body}</body>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
