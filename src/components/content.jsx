import PersonalData from "./personalData";
import Education from "./education";
import Experience from "./experience";
import Cv from "./cv";
import { useState } from "react";
import "../styles/content.css";

export default function Content() {
  const [fullName, setFullName] = useState("");
  const handleNameChange = (e) => setFullName(e.target.value);
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  const [city, setCity] = useState("");
  const handleCityChange = (e) => setCity(e.target.value);
  const [phone, setPhone] = useState("");
  const handlePhoneChange = (e) => setPhone(e.target.value);
  {
    /*          */
  }
  const [educations, setEducations] = useState([]);
  {
    /*          */
  }
  const [experiences, setExperiences] = useState([]);
  return (
    <>
      <div className="content">
        <div className="insert">
          <PersonalData
            fullName={fullName}
            handleName={handleNameChange}
            email={email}
            handleEmail={handleEmailChange}
            city={city}
            handleCity={handleCityChange}
            phone={phone}
            handlePhone={handlePhoneChange}
          />
          <Education educations={educations} setEducations={setEducations} />
          <Experience
            experiences={experiences}
            setExperiences={setExperiences}
          />
        </div>
        <main className="cv">
          <Cv
            fullName={fullName}
            email={email}
            city={city}
            phone={phone}
            educations={educations}
            experiences={experiences}
          />
        </main>
      </div>
    </>
  );
}
