import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home_page";
import Navigation from "./components/navigation_bar/nav_bar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
