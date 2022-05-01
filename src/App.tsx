import { useEffect, useState } from "react";
import "./App.css";
import "./Forms.css"
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { apiRequest } from "./util/api";
import { UserContext } from "./util/context";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Keywords } from "./components/Keywords";
import { AddKeyword } from "./components/AddKeyword";
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
      <Router>
        <div className="body-container">
          <Header></Header>
          <div className="main-body">
            <SideBar></SideBar>
            <section className="body-content">
              <Routes>
                <Route path="keywords" element={<Keywords />}>
                    <Route path="create" element={<AddKeyword/>}></Route>
                </Route>
              </Routes>
            </section>
          </div>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
