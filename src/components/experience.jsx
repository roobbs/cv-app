import { useState } from "react";
import "../styles/container.css";

export default function Experience({ experiences, setExperiences }) {
  const [showForm, setShowForm] = useState(false);
  const [newExperience, setNewExperience] = useState({
    jobTitle: "",
    company: "",
    desc: "",
    startDate: "",
    endDate: "",
  });

  const handleJobChange = (e) =>
    setNewExperience({ ...newExperience, jobTitle: e.target.value });
  const handleCompanyChange = (e) =>
    setNewExperience({ ...newExperience, company: e.target.value });
  const handleDescChange = (e) =>
    setNewExperience({ ...newExperience, desc: e.target.value });
  const handleStartDateChange = (e) =>
    setNewExperience({ ...newExperience, startDate: e.target.value });
  const handleEndDateChange = (e) =>
    setNewExperience({ ...newExperience, endDate: e.target.value });

  const addExperience = () => {
    setExperiences([...experiences, newExperience]);
    setNewExperience({
      jobTitle: "",
      company: "",
      desc: "",
      startDate: "",
      endDate: "",
    });
  };

  const removeExperience = (index) => {
    const updateExperience = [...experiences];
    updateExperience.splice(index, 1);
    setExperiences(updateExperience);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="infoContainer">
      {experiences.map((education, index) => (
        <div key={index} className="square">
          <h3>{education.jobTitle}</h3>
          <button onClick={() => removeExperience(index)}>Remove</button>
        </div>
      ))}

      <div>
        <h2 onClick={toggleForm}>Add New Experience {showForm ? "▼" : "▶"}</h2>
        {showForm && (
          <div>
            <form>
              <label>
                Job Title:
                <input
                  type="text"
                  value={newExperience.jobTitle}
                  onChange={handleJobChange}
                />
              </label>
              <label>
                Company:
                <input
                  type="text"
                  value={newExperience.company}
                  onChange={handleCompanyChange}
                />
              </label>
              <label>
                Start Date:
                <input
                  type="date"
                  value={newExperience.startDate}
                  onChange={handleStartDateChange}
                />
              </label>
              <label>
                End Date:
                <input
                  type="date"
                  value={newExperience.endDate}
                  onChange={handleEndDateChange}
                />
              </label>
              <label>
                Description:
                <textarea
                  type="text"
                  value={newExperience.desc}
                  onChange={handleDescChange}
                />
              </label>
            </form>
            <h2>
              <button onClick={() => addExperience()}>Add Education</button>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
