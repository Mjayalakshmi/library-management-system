
export default function Attendance() {
  const markAttendance = () => {
    alert("Face detected successfully!\nAttendance marked ✅");
  };

  return (
    <div className="card">
      <h2>Face Based Attendance</h2>

      <p>
        Camera access may vary by device. This module simulates
        face verification before marking attendance.
      </p>

      <button onClick={markAttendance}>
        Start Face Attendance
      </button>
    </div>
  );
}
