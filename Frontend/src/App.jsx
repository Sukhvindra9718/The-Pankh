import { BrowserRouter, Routes, Route } from "react-router-dom";
import Videos from "./SuperAdmin/Videos/Videos";
import VideoPlayer from "./Components/VideoPlayer";
import Dashboard from "./SuperAdmin/AdminPanel/AdminPanel";
import Layout from "./Layout/Layout";
import Gallery from "./pages/Gallery";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Gallery />} />
        </Route>
        <Route path="/videos" element={<Videos />} />
        <Route path="/videos/:id" element={<VideoPlayer />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
