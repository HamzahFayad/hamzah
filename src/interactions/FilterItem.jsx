import "../App.css"

function FilterItem({ filter, onClick }) {
    
    return (
        <>
            <p onClick={onClick}>{ filter }</p>
        </>
  );
}

export default FilterItem;


//className={`FilterItem FilterItem-${filter}`}