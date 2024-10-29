import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  EventsPage,
  Programs,
  Portfolio,
  CommunityPage,
  Register,
} from "./Pages/index.tsx";
import Layout from "./components/layout.tsx";
import Aboutus from "./Pages/Aboutus.tsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
