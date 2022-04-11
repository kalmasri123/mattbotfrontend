import "./App.css";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div className="body-container">
      <Header></Header>
      <div className="main-body">
        <SideBar></SideBar>
      </div>
    </div>
  );
}

export default App;
