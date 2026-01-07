import { useState } from "react";
import Sidebar from "./Sidebar";
import Books from "./Books";
import Attendance from "./Attendance";

export default function App() {
  const [page, setPage] = useState("books");

  return (
    <div className="layout">
      <Sidebar page={page} setPage={setPage} />

      <div className="content">
        <h1>Library Management System</h1>
        {page === "books" && <Books />}
        {page === "attendance" && <Attendance />}
      </div>
    </div>
  );
}
