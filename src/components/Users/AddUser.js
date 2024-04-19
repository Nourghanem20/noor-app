import Button from "../Ui/Button";
import Card from "../Ui/Card";
import ErrorModel from "../Ui/ErrorModel";
import classes from "./AddUser.module.css";
import React, { useState } from "react";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "no it is so beautiful in flutter  ",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age ",
        message: "please enter a valid age  (>0) ",
      });
      return;
    }
    props.addFunction(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const changeUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModel
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card cardCss={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={changeUserNameHandler}
          />
          <label htmlFor="age">Age (Year)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={changeAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
