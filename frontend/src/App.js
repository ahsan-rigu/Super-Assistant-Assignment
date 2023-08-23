import "./App.css";
import ScrollToHashElement from "./Utils/ScrollToHash";
import Form from "./Pages/Form";
import Submitted from "./Pages/Submitted";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/submitted" element={<Submitted />}></Route>
      </Routes>
    </div>
  );
}

export default App;
