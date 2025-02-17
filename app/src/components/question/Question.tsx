import React, { useEffect, useRef, useState } from "react";

interface Props {
  index: number;
  handleChange: (newIndex: number) => void; // Correct function type
}

const Question = (props: Props) => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionState, setCurrentQuestionState] = useState<any>(null);
  const [updatedAnswers, setUpdatedAnswers] = useState<string[]>([]);
  const answerRef = useRef("");
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
    )
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  useEffect(() => {
    if (questions.length > 0 && props.index < questions.length) {
      const question = questions[props.index];
      setCurrentQuestionState(question);
      combineAndRandomize(question);
    }
  }, [questions, props.index]);

  const shuffle = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const combineAndRandomize = (question: any) => {
    const answersUpdated = [
      ...question.incorrect_answers,
      question.correct_answer,
    ];
    setUpdatedAnswers(shuffle(answersUpdated));
  };

  if (!currentQuestionState) return <p>Loading...</p>;

  const handleSubmit = () => {
    props.handleChange(props.index + 1);
    // if (answerRef.current == currentQuestionState.correct_answer) {
    //   setScore(score + 1);
    // }
    console.log(answerRef.current.label);
  };

  return (
    <>
      <h1>{currentQuestionState.question}</h1>
      {updatedAnswers.map((answer, i) => (
        <div key={i}>
          <label htmlFor="answer">
            {i + 1}. {answer}
          </label>
          <input
            type="radio"
            name="answer"
            ref={answerRef}
            placeholder="type or smt"
          />

          <br />
        </div>
      ))}
      <button onClick={() => props.handleChange(props.index + 1)}>skip</button>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <p>score: {score}</p>
      <p>Question {props.index + 1}</p>
    </>
  );
};

export default Question;
