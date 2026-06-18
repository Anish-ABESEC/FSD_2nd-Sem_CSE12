import React from "react";
import ReactDOM from "react-dom/client";

function Student() {
  return (
    <div>
      <h1>Student Information</h1>
      <p>Name: Anish Singh</p>
      <p>Roll No: 123456</p>
      <p>Course: B.Tech</p>
      <p>Branch: CSE</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Student />
  </React.StrictMode>
);