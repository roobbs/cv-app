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
              <div className="dates">
                <div>
                  {education.startDate} - {education.endDate}
                </div>
                <div>{education.country}</div>
              </div>
              <div className="school">
                <h3>{education.degree}</h3>
                <div>{education.school}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="experience">
        <div className="experienceTitle">
          {props.experiences.length > 0 && "Job Experience"}
        </div>
        <div className="experiences">
          {props.experiences.map((exp, index) => (
            <div key={index} className="experienceSquare">
              <div className="jobInfo">
                <div className="jobDate">
                  {exp.startDate} - {exp.endDate}
                </div>
                <div className="jobTitle">
                  <h3>{exp.jobTitle}</h3>
                  <div>{exp.company}</div>
                </div>
              </div>
              <div className="desc">{exp.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
