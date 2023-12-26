import { useState } from "react";
import "../styles/container.css";

export default function PersonalData(props) {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="infoContainer">
      <h2 onClick={toggleForm}>Personal Information {showForm ? "▼" : "▶"}</h2>
      {showForm && (
        <form>
          <label>
            Full Name:
            <input
              type="text"
              value={props.fullName}
              onChange={props.handleName}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={props.email}
              onChange={props.handleEmail}
            />
          </label>
          <label>
            City:
            <input type="text" value={props.city} onChange={props.handleCity} />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              value={props.phone}
              onChange={props.handlePhone}
            />
          </label>
        </form>
      )}
    </div>
  );
}
