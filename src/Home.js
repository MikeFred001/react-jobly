import "./Home.css";

/** Displays homepage with a simple greeting
 *
 * Props:
 *  - None
 *
 * State:
 *  - None
 *
 * RoutesList -> Home  */
function Home() {
  return (
    <div className="Home">
      <div className="Home-tagline">
        <h1 className="Home-title">Jobly</h1>
        <span className="Home-slogan">All the jobs in one, convenient place.</span>
      </div>
    </div>
  );
}

export default Home;