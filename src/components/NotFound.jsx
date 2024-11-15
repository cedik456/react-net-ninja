import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = "404 - Page Not Found";

    return () => {
      document.title = "The Dojo Blog";
    };
  }, []);

  return (
    <div>
      <h1>404</h1>
      <h3>The page you are looking for cannot be found</h3>
      <Link to="/">Go back to the Homepage</Link>
    </div>
  );
}

export default NotFound;
