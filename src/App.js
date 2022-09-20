import "./App.css";
import { Navbar } from "./Component/Common/Navbar";
import { Footer } from "./Component/Common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
