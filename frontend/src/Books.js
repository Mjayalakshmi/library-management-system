import { useEffect, useState } from "react";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const categories = ["AI", "ML", "DL", "Data", "Cloud", "CS", "Security"];

  return (
    <div className="card">
      <h2>Books</h2>

      {categories.map(cat => (
        <div key={cat}>
          <div className="category" onClick={() => setOpen(open === cat ? null : cat)}>
            📂 {cat}
          </div>

          {open === cat &&
            books
              .filter(b => b.category === cat)
              .map(b => (
                <div key={b.id} className="book-item">
                  📘 {b.title}
                </div>
              ))}
        </div>
      ))}
    </div>
  );
}
