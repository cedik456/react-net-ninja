import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  return (
    <div className="blog-details">
      <p>
        Blog Details <br /> Id: {id}
      </p>
    </div>
  );
}

export default BlogDetails;
