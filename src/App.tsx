import { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { apiRequest } from "./util/api";
function App() {
  useEffect(() => {
    apiRequest("http://localhost:3000/api/auth/discord/me", {
      method: "GET",
      credentials: "include",
    }).then(async (res) => {
      console.log(await res.json());
    });
  });
  console.log("rendered");
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
