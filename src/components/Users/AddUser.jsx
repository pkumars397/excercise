import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length == 0 || enteredAge.trim().length == 0) {
      setError({
        title: "Invalid Input",
        message: "please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "please enter a valid age(>0)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);

    setEnteredUserName("");
    setEnteredAge("");
  };

  const userNameHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNameHandler}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
