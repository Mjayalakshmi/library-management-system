export default function Sidebar({ page, setPage }) {
  return (
    <div className="sidebar">
      <h2 className="logo">Library</h2>

      <div
        className={page === "books" ? "menu active" : "menu"}
        onClick={() => setPage("books")}
      >
        📚 Books
      </div>

      <div
        className={page === "attendance" ? "menu active" : "menu"}
        onClick={() => setPage("attendance")}
      >
        🎓 Attendance
      </div>
    </div>
  );
}
