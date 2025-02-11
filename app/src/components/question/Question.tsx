import React from "react";

interface Props {
  index: number;
  handleChange: void;
}

const Question = (props: Props) => {
  return (
    <>
      <input type="radio" name="0" id="" />
      <input type="radio" name="0" id="" />
      <input type="radio" name="0" id="" />
      <button onClick={() => props.handleChange(props.index + 1)}>
        submit
      </button>
    </>
  );
};

export default Question;
