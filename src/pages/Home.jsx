import "../App.css"
import { private_projects } from "./home-data"
import Filter from "../interactions/Filter";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {

  const [filter, setFilter] = useState("All Projects");
  const [loaded, setIsLoaded] = useState(false);
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
  }

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className="Home">
      <div className="Grid-width-wide Center">
        <h1 className="Headline">Hello. 👋🏼</h1>
      </div>
      <hr></hr>
      <div className="Img-container Img-container-narrow Img-container-narrow-home">
        <img src="/images/lofi.jpeg" alt="img" />
        <div className="scroller">
          <span>
            Web Development<br />
            Frontend - UX - Interaction<br/>
            Photography<br/>
            Cinematic Film
          </span>
        </div>
      </div>
      <hr></hr>

      <section className="Grid-width-wide Main-content" id="work">
        <div className="Center bottom-space">
          <p>I Create. For The Web. And With My Camera.</p>
          <p>I Develop. I Code. I Design. I Photograph. I Film.</p>
        </div>
        <div className="Projects top-space bottom-space">
          <h2 data-aos="zoom-in" className="Subheadline Text-color">Projects 🖥️</h2>
          <Filter onClick={handleFilter} />
          <div data-aos="fade-up" data-aos-duration="1000" className="Projects-wrap top-space bottom-space">
            {!loaded && 
              <>
                <div className="Project-item Project-preview"></div>
                <div className="Project-item Project-preview"></div>
                <div className="Project-item Project-preview"></div>
              </>

            }
            { loaded && 
              projectsFilter.map((data) => {
              return (
                <a key={data.id} target="_blank" rel="noreferrer" href={data.link}>
                <div key={data.id} className="Project-item">
                  <img src={data.img} alt={"project-image-"+data.id} />
                    <p className="project-title">{data.title} - {data.topic.join("- ").split("All Projects-")}</p>
                  </div>
                  </a>
              );
             }     
              )}
            
            { num < 1 &&
              <p>No projects yet</p>
            }
          </div>
        </div>
      </section>
      <Outlet />
    </div>
  );
}

export default Home;
