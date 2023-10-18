import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useState } from "react";
import ResponsiveAppBar from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Signup from "./routes/Signup";
import Login from "./routes/Login";

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
