import "../App.css";
import { about_data } from "./about-data";

function About() {
  return (
    <div className="About">
      <div className="Grid-width-wide Center">
        <h1 className="Headline">About.</h1>
        <div className="Round"></div>
      </div>
      <div className="Grid-width-wide Timeline">
        <p style={{ textAlign: "center" }}>
          <em>
            "If I already have a vision, my work is almost done. The rest is a
            technical problem." <br />- Hiroshi Sugimoto
          </em>
        </p>
        <hr></hr>
        <h2 className="Subheadline">life so far 👀</h2>
        <br />
        <p>
          <span
            className="legend"
            style={{ backgroundColor: "#d27575" }}
          ></span>
          work
          <br />
          <span
            className="legend"
            style={{ backgroundColor: "#9cba8f" }}
          ></span>
          certification / courses
          <br />
          <span
            className="legend"
            style={{ backgroundColor: "#529b9c" }}
          ></span>
          education
        </p>
        {about_data.map((data) => {
          return (
            <div
              id={"item-" + about_data.indexOf(data)}
              key={about_data.indexOf(data)}
              className="Timeline-item"
            >
              <h3>{data.date}</h3>
              <div>
                <h4 style={{ background: data.color }}>{data.title}</h4>
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
