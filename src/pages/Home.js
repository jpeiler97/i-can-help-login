import React from "react";

function Home({ Logout }) {
  return (
    <div className="welcome">
      <h2>Welcome</h2>
      <button onClick={Logout}>Logout</button>
    </div>
  );
}

export default Home;
