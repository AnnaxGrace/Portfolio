import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingContainer from "./components/LandingContainer";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingContainer />}>
          <Route index element={<LandingContainer/>} />
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
