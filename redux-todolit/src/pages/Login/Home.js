import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="text-center mt-8">
      <div>
        <h1>
          <Link to="/login" className="text-center text-xl font-semibold underline underline-offset-8 decoration-blue-600 decoration-4 shadow-md p-3">Login</Link>
        </h1>
        <br />
        <h1 className="mt-6">
          <Link to="/signup" className="text-center text-xl font-semibold underline underline-offset-8 decoration-blue-600 decoration-4 shadow-md p-3 ">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2 className="font-medium">{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  );
}

export default Home;
