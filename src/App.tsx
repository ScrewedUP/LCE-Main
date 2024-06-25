import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  EventsPage,
  Programs,
  Portfolio,
  CommunityPage,
} from "./Pages/index.tsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
