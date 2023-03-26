import "../App.css"
import FilterItem from "./FilterItem";

function Filter({onClick}) {
  let filter = ["All","Vue", "React", "HTML/SCSS/JavaScript", "API", "JSON", "Wordpress", "Design"];
  //const [filtername, setFiltername] = useState(filter);

  /*const handleFilter = (item) => {
    console.log(item);
  }*/

    return (
      <div className="Filter">
        {filter.map((item) => {
          return <FilterItem key={item} filter={item} onClick={() => { onClick(item)}} />
        })}
     </div>
  );
}

export default Filter;