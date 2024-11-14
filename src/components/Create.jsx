import React, { useState } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("jane"); // should have a default value when using select (option)

  const submitForm = (e) => {
    e.preventDefault();
    const contents = { title, body, author };
    console.log(contents);
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
          <option value="jane">Jane Smith</option>
          <option value="alice">Alice Brown</option>
          <option value="bob">Bob Johnson</option>
        </select>

        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default Create;
