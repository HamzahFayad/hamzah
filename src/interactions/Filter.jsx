import { useState } from "react";
import "../App.css"
import FilterItem from "./FilterItem";

function Filter({onClick}) {
  let filter = ["All Projects", "HTML/SCSS/JS", "React", "Vue.js", "API", "JSON", "Wordpress", "Design"];
  //const [filtername, setFiltername] = useState(filter);
  const [activeIndex, setActiveIndex] = useState(0);
  /*const handleFilter = (item) => {
    console.log(item);
  }*/

    return (
      <div data-aos="fade-up" data-aos-duration="500" className="Filter">
        {filter.map((item, i) => {
          return <div key={item} onClick={() => {setActiveIndex(i)}} className={`${i === activeIndex ? "active-filter" : ""}`} ><FilterItem filter={item} onClick={() => { onClick(item)}} /></div>
        })}
     </div>
  );
}

export default Filter;