import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";
import UserDetail from "./components/pages/UserDetail";
import Users from "./components/pages/Users";
import NotFound from "./components/pages/NotFound";
import Options from "./components/pages/Options";
import { useSelector } from "react-redux";
import "./style.css";
function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          columnGap: "1rem",
          alignItems: "start",
          color: theme.textColor,
          backgroundColor: theme.bgColor
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/options" element={<Options />} />
          <Route path="/users/:myLogin" element={<UserDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
