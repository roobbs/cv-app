import { useState } from "react";
import "../styles/container.css";

export default function Education() {
  const [showForm, setShowForm] = useState(false);
  const [degree, setDegree] = useState("");
  const [school, setSchool] = useState("");
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDegreeChange = (e) => setDegree(e.target.value);
  const handleSchoolChange = (e) => setSchool(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="infoContainer">
      <h2 onClick={toggleForm}>Education {showForm ? "▼" : "▶"}</h2>
      {showForm && (
        <form>
          <label>
            Degree:
            <input type="text" value={degree} onChange={handleDegreeChange} />
          </label>
          <label>
            School:
            <input type="text" value={school} onChange={handleSchoolChange} />
          </label>
          <label>
            Country:
            <input type="text" value={country} onChange={handleCountryChange} />
          </label>
          <label>
            Start Date:
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </label>
          <label>
            End Date:
            <input type="date" value={endDate} onChange={handleEndDateChange} />
          </label>
        </form>
      )}
    </div>
  );
}
