import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("jane"); // should have a default value when using select (option)
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    setIsPending(true);
    const contents = { title, body, author };

    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contents),
      }).then(() => {
        console.log("Blog Added!");
        setIsPending(false);
        navigate("/");
      });
    }, 2000);
  };

  return (
    <div className="create-blog">
      <h2>Add a New Blog</h2>
      <form onSubmit={submitForm}>
        <label>Blog Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          required
        />

        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>

        <label>Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="james">james</option>
          <option value="mark">mark</option>
          <option value="charles">charles</option>
        </select>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
}

export default Create;
