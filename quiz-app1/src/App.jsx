import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionPage from "./pages/QuestionPage";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuestionPage />} />
        <Route path="/question/:id" element={<QuestionPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;