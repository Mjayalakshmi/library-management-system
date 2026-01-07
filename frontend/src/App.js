import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./Books";
import Attendance from "./Attendance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </Router>
  );
}

export default App;

