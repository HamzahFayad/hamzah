import "../App.css"

function NotFound() {
  return (
    <div className="App">
        <div className="Grid-width-wide Center">
        <h1 className="Headline">Oh no, page not found.</h1>
        <a href="/"><p>Go back to Homepage -{'>'}</p></a>
        </div>
    </div>
  );
}

export default NotFound;