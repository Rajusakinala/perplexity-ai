import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayOut from "./components/LayOut";
import Home from "./components/Home";
import Newthread from "./components/Newthread";

const App = () => {
  return (
    <div>
      {/* <Router> */}
      <LayOut />
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-thread" element={<Newthread />} />
        </Routes>
      </Router> */}
    </div>
  );
};

export default App;
