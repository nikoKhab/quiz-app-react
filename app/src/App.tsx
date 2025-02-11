import "./App.css";
import Question from "./components/question/Question";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = [0];
  return (
    <>
      <Question index={currentQuestionIndex}></Question>
    </>
  );
}

export default App;
