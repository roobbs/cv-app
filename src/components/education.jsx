import { useState } from "react";
import "../styles/container.css";

export default function Education({ educations, setEducations }) {
  const [showForm, setShowForm] = useState(false);
  // const [educations, setEducations] = useState([]);
  const [newEducation, setNewEducation] = useState({
    degree: "",
    school: "",
    country: "",
    startDate: "",
    endDate: "",
  });

  const handleDegreeChange = (e) =>
    setNewEducation({ ...newEducation, degree: e.target.value });
  const handleSchoolChange = (e) =>
    setNewEducation({ ...newEducation, school: e.target.value });
  const handleCountryChange = (e) =>
    setNewEducation({ ...newEducation, country: e.target.value });
  const handleStartDateChange = (e) =>
    setNewEducation({ ...newEducation, startDate: e.target.value });
  const handleEndDateChange = (e) =>
    setNewEducation({ ...newEducation, endDate: e.target.value });

  const addEducation = () => {
    setEducations([...educations, newEducation]);
    setNewEducation({
      degree: "",
      school: "",
      country: "",
      startDate: "",
      endDate: "",
    });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const removeEducation = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  return (
    <div className="infoContainer">
      {educations.map((education, index) => (
        <div key={index} className="educationSquare">
          <h3>{education.degree}</h3>
          <button onClick={() => removeEducation(index)}>Remove</button>
        </div>
      ))}
      <div>
        <h2 onClick={toggleForm}> Add New Education {showForm ? "▼" : "▶"}</h2>
        {showForm && (
          <div>
            <form>
              <label>
                Degree:
                <input
                  type="text"
                  value={newEducation.degree}
                  onChange={handleDegreeChange}
                />
              </label>
              <label>
                School:
                <input
                  type="text"
                  value={newEducation.school}
                  onChange={handleSchoolChange}
                />
              </label>
              <label>
                Country:
                <input
                  type="text"
                  value={newEducation.country}
                  onChange={handleCountryChange}
                />
              </label>
              <label>
                Start Date:
                <input
                  type="date"
                  value={newEducation.startDate}
                  onChange={handleStartDateChange}
                />
              </label>
              <label>
                End Date:
                <input
                  type="date"
                  value={newEducation.endDate}
                  onChange={handleEndDateChange}
                />
              </label>
            </form>
            <h2>
              <button onClick={() => addEducation()}>Add Education</button>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
