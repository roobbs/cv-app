import emailSvg from "../assets/email.svg";
import mapSvg from "../assets/map-marker.svg";
import phoneSvg from "../assets/phone.svg";

export default function Cv(props) {
  return (
    <>
      <div className="header">
        <div className="name">{props.fullName || "Name"}</div>
        <div className="info">
          <div>
            <img src={emailSvg} alt=" " height={30} />
            {props.email || "Email"}
          </div>
          <div>
            {" "}
            <img src={phoneSvg} alt=" " height={30} />
            {props.phone || "Phone"}
          </div>
          <div>
            <img src={mapSvg} alt=" " height={30} />
            {props.city || "City"}
          </div>
        </div>
      </div>
      <div className="education">
        <div className="educationTitle">
          {props.educations.length > 0 && "Education Experience"}
        </div>
        <div className="educations">
          {props.educations.map((education, index) => (
            <div key={index} className="educationSquareCv">
              <h3>{education.degree}</h3>
              <p>{education.school}</p>
              <p>Country: {education.country}</p>
              <p>Start Date: {education.startDate}</p>
              <p>End Date: {education.endDate}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="experience">Job Experience</div> */}
    </>
  );
}
