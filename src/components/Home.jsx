import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="This is all blogs" />}
      {isPending && <div>Loading....</div>}
    </div>
  );
}

export default Home;
