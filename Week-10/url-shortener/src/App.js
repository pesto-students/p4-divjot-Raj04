import "./App.css";
import NavBar from "./Component/HeaderNavBar";
import URLShortener from "./Component/URLShortener";

function App() {
  return (
    <div className="App">
      <NavBar />
      <URLShortener />
      {/* <header className="App-header"></header> */}
    </div>
  );
}

export default App;
