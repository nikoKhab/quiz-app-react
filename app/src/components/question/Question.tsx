import React, { useEffect, useState } from "react";

interface Props {
  index: number;
  handleChange: void;
}

interface QuizQuestion {
  type: "multiple" | "boolean"; // Assuming the type can be either "multiple" or "boolean"
  difficulty: "easy" | "medium" | "hard";
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const Question = (props: Props) => {
  // https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple
  const [datan, setDatan] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState();

  useEffect(() => {
    const myRequest = new Request(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
    );

    fetch(myRequest)
      .then((response) => response.json())
      .then((data) => {
        console.log(currentQuestion);
        console.log(data.results[props.index]);
        setCurrentQuestion(data.results[props.index]);
        console.log(currentQuestion);
      });
  }, []);

  return (
    <>
      <>
        <label>1.</label>
        <input type="radio" name="0" id="" />
        <br />
        <label>2.</label>
        <input type="radio" name="0" id="" />
        <br />
        <label>3.</label>
        <input type="radio" name="0" id="" />
        <br />
        <button onClick={() => props.handleChange(props.index + 1)}>
          submit
        </button>
        <p>{props.index}</p>
      </>
    </>
  );
};

export default Question;
