import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not Fetch data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((e) => {
          setError(e.message);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="This is all blogs" />}
      {isPending && <div>Loading....</div>}
    </div>
  );
}

export default Home;
