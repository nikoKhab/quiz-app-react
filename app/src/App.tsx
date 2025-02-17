import { useState } from "react";
import "./App.css";
import Question from "./components/question/Question";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleChildEvent = (data: number) => {
    setCurrentQuestionIndex(data);
    if (currentQuestionIndex > 10) {
      return;
    }
  };

  return (
    <>
      <Question index={currentQuestionIndex} handleChange={handleChildEvent} />
    </>
  );
}

export default App;
