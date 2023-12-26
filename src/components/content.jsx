import PersonalData from "./personalData";
import Education from "./education";
import Experience from "./experience";
import Cv from "./cv";
import "../styles/content.css";

export default function Content() {
  return (
    <>
      <div className="content">
        <div className="insert">
          <PersonalData />
          <Education />
          <Experience />
        </div>
        <main className="cv">
          <Cv />
        </main>
      </div>
    </>
  );
}
