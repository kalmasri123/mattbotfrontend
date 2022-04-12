import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { apiRequest } from "./util/api";
import { UserContext } from "./util/context";
function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  useEffect(() => {
    if (!user) {
      apiRequest("http://localhost:3000/api/auth/discord/me", {
        method: "GET",
        credentials: "include",
      }).then(async (res) => {
        const user = await res.json();
        setUser(user);
      });
    }
  });
  console.log("rendered");
  return (
    <UserContext.Provider value={user}>
      <div className="body-container">
        <Header></Header>
        <div className="main-body">
          <SideBar></SideBar>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
