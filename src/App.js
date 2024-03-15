import "./App.css";
import DontMiss from "./components/dontMiss";
import HeroBanner from "./components/heroBanner";
import Nav from "./components/topNav";
function App() {
  return (
    <div className="App">
      <Nav />
      <HeroBanner />
      <DontMiss/>
    </div>
  );
}

export default App;
