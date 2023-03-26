import "../App.css"

function FilterItem({filter, onClick}) {
    return (
        <div className="FilterItem">
            <p onClick={onClick}>{ filter }</p>
     </div>
  );
}

export default FilterItem;