import logo from './logo.svg';
import './App.css';

function App() {
  const clicked = () => {
    console.log("Projects button clicked!");
  };

  return (
    <div>
      <div className="App">
        <h1>Welcome</h1>
        <h2>About me</h2>
        <p>...</p>
      </div>

      <div className="Test">
        <button className="Projects" onClick={clicked}>
          <h1> My Projects </h1>
        </button>
      </div>
    </div>
  );
}

export default App;
