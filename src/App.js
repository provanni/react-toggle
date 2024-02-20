import Navbar from "./components/navbar/navbar";
import moonImage from "./assets/moon.png"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <img src={moonImage} alt="moon" style={{maxWidth: '100%', maxHeight: '100vh', margin: 'auto', display: 'block' }}/>
    </div>
  );
}

export default App;

