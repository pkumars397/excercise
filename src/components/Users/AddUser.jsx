import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const enteredUserName = useRef();
  const enteredAge = useRef();
  const collegeName = useRef();
  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName.current.value, enteredAge.current.value);
    if (
      enteredUserName.current.value.trim().length == 0 ||
      enteredAge.current.value.trim().length == 0
    ) {
      setError({
        title: "Invalid Input",
        message: "please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (enteredAge.current.value < 1) {
      setError({
        title: "Invalid Age",
        message: "please enter a valid age(>0)",
      });
      return;
    }
    props.onAddUser(
      enteredUserName.current.value,
      enteredAge.current.value,
      collegeName.current.value
    );

    // setEnteredUserName("");
    // setEnteredAge("");
  };

  // const userNameHandler = (e) => {
  //   setEnteredUserName(e.target.value);
  // };

  // const ageHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };

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
            ref={enteredUserName}
            // value={enteredUserName}
            // onChange={userNameHandler}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            ref={enteredAge}
            // value={enteredAge}
            // onChange={ageHandler}
          />
          <label htmlFor="college">College</label>
          <input type="text" id="college" ref={collegeName} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
