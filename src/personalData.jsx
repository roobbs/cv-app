import { useState } from "react";
import "./container.css";

export default function PersonalData() {
  const [showForm, setShowForm] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);

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
            <input type="text" value={fullName} onChange={handleNameChange} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            City:
            <input type="text" value={city} onChange={handleCityChange} />
          </label>
          <label>
            Phone Number:
            <input type="tel" value={phone} onChange={handlePhoneChange} />
          </label>
        </form>
      )}
    </div>
  );
}
