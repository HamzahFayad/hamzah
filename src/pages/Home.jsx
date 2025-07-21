import "../App.css";
import { private_projects } from "./home-data";
import Filter from "../interactions/Filter";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { visuals00 } from "./creation-data";

function Home() {
  const [filter, setFilter] = useState("All Projects");
  const [loaded, setIsLoaded] = useState(false);
  const [next, setNext] = useState(6);

  const handleMoreProjects = () => {
    setNext(next + 3);
  };
  //const [count, setCount] = useState(0);

  let projectsFilter = private_projects.filter((f) => f.topic.includes(filter));
  let num = projectsFilter.length;

  useEffect(() => {
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 800);
  }, [filter]);

  const handleFilter = (item) => {
    console.log(item);
    setFilter(item);
    //setIsLoaded(false);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  function resizeImg(src) {
    console.log("resized", src);
    console.log(document.querySelector("#imgSrc").style.zIndex);
    document.querySelector("#imgSrc").src = src;
    document.querySelector("#imgSrc").style.zIndex =
      document.querySelector("#imgSrc").style.zIndex === "1" ? "-1" : "1";
  }

  return (
    <div className="Home">
      <div className="Grid-width-wide Center">
        <h1 className="Headline">Hello. 👋🏼</h1>
      </div>
      <hr></hr>
      <div className="Img-container Img-container-narrow Img-container-narrow-home">
        <img src="/images/mnt.jpeg" alt="img" />
        <div className="scroller">
          <span>
            Web & Software Dev
            <br />
            ML / Data
            <br />
            Generative Art
            <br />
            Visual Stories
          </span>
        </div>
      </div>
      <hr></hr>

      <section className="Grid-width-wide Main-content" id="work">
        <div className="Center bottom-space">
          <p>I Create. For The Web. And With My Camera.</p>
          <p>I Develop. I Build. I Photograph. I Film.</p>
        </div>
        <div className="Projects top-space bottom-space">
          <h2 data-aos="zoom-in" className="Subheadline Text-color">
            Projects 🖥️
          </h2>
          <Filter onClick={handleFilter} />
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="Projects-wrap top-space bottom-space"
          >
            {!loaded && (
              <>
                <div className="Project-item Project-preview"></div>
                <div className="Project-item Project-preview"></div>
                <div className="Project-item Project-preview"></div>
              </>
            )}
            {loaded &&
              projectsFilter?.slice(0, next)?.map((data) => {
                return (
                  <a
                    key={data.id}
                    target="_blank"
                    rel="noreferrer"
                    href={data.link}
                  >
                    <div key={data.id} className="Project-item">
                      <img src={data.img} alt={"project-image-" + data.id} />
                      <p className="project-title">
                        {data.title}{" "}
                        {/*- {data.topic.join(" - ").split("All Projects -")}*/}
                      </p>
                    </div>
                  </a>
                );
              })}
            {num < 1 && <p>new projects coming soon ;)</p>}
          </div>
          {next < projectsFilter?.length && (
            <button onClick={handleMoreProjects}>SHOW MORE</button>
          )}
        </div>
      </section>

      <section className="Grid-width-wide" id="creation">
        <h2 className="Text-color" style={{ textAlign: "center" }}>
          visuals stories - check out more{" "}
          <a style={{ textDecoration: "underline" }} href="creation">
            here
          </a>
        </h2>
        <div className="img-vertical">
          {visuals00.map((visual) => {
            return (
              <img
                onClick={() => {
                  resizeImg(visual.img);
                }}
                key={visual.id}
                className="img-vertical-item"
                src={visual.img}
                alt={visual.img}
              />
            );
          })}
          <img
            onClick={() => {
              resizeImg();
            }}
            src="https://w3bits.com/wp-content/uploads/css-image-hover-zoom.jpg"
            id="imgSrc"
            alt="placehlder"
          />
        </div>
      </section>
      <Outlet />
    </div>
  );
}

export default Home;
