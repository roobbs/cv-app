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
            <img src={mapSvg} alt=" " height={30} />
            {props.city || "City"}
          </div>
          <div>
            {" "}
            <img src={phoneSvg} alt=" " height={30} />
            {props.phone || "Phone"}
          </div>
        </div>
      </div>
    </>
  );
}
