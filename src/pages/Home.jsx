import "../App.css"
import { private_projects } from "./home-data"
import Filter from "../interactions/Filter";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function Home() {

  const [filter, setFilter] = useState("All Projects");
  const [loaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 400);
  }, [loaded]);
  

  const handleFilter = (item) => {
    console.log(item);
    setFilter(item);
    setIsLoaded(false);
  }

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
          Web Development<br/>
          Photography<br/>
          Cinematic Film<br/>
          Frontend - UX - Interaction
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
          <h2 className="Subheadline Text-color">Projects 🖥️</h2>
          <Filter onClick={handleFilter} />
          <div className="Projects-wrap top-space bottom-space">
            {!loaded && 
              <>
                <div className="Project-item Project-preview"></div>
                <div className="Project-item Project-preview"></div>
                <div className="Project-item Project-preview"></div>
              </>

            }
            { loaded && 
              private_projects.filter((f) => f.topic.includes(filter)).map((data) => {
              return (
                <a key={data.id} target="_blank" rel="noreferrer" href={data.link}>
                <div key={data.id} className="Project-item">
                  <img src={data.img} alt={"project-image-"+data.id} />
                    <p>{data.title} - {data.topic.join("- ").split("All Projects-") }</p>
                  </div>
                  </a>
              );
             }     
            )}
          </div>
        </div>
      </section>
      <Outlet />
    </div>
  );
}

export default Home;
