import { useState } from "react";
import "../styles/container.css";

export default function Experience() {
  const [showForm, setShowForm] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [desc, setDesc] = useState("");

  const handleJobChange = (e) => setJobTitle(e.target.value);
  const handleCompanyChange = (e) => setCompany(e.target.value);
  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);
  const handleDescChange = (e) => setDesc(e.target.value);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="infoContainer">
      <h2 onClick={toggleForm}>Experience {showForm ? "▼" : "▶"}</h2>
      {showForm && (
        <form>
          <label>
            Job Title:
            <input type="text" value={jobTitle} onChange={handleJobChange} />
          </label>
          <label>
            Company:
            <input type="text" value={company} onChange={handleCompanyChange} />
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
          <label>
            Description:
            <textarea type="text" value={desc} onChange={handleDescChange} />
          </label>
        </form>
      )}
    </div>
  );
}
