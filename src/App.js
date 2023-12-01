import placholder from "./images/placeholderChart.jpg"
import './App.css';

function App() {
  return (
    <main className="container">
      <header className="homeHeader">
        <h3>FitnessTracker</h3>
        <button className="logInButton">Log In</button>
      </header>
      <section className="mainHome">
        <div>
          <h1>Fitness Tracking</h1>
          <p>I created this fitness tracker as a cool project to help <br></br>me become healthier and also improve my coding skills.</p>
        </div>
        <div>
          <img src={placholder} className="homeImg"></img>
        </div>
      </section>
    </main>
  );
}

export default App;
