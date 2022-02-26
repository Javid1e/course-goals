import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [entredValue, setEntredValue] = useState("");
  const goalInputChangeHandler = (event) => {
    setEntredValue(event.target.value);
  };
  const formSubmitHandler=event =>{
      event.preventDefalut();
      props.onAddGoal(entredValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}></input>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
export default CourseInput;
