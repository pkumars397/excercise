import { useState } from "react";
import AddUser from "./components/Users/AddUser.jsx";
import UsersList from "./components/Users/UsersList.jsx";

function App() {
  const [userArr, setUserArr] = useState([]);
  const UserHandler = (uname, uage) => {
    setUserArr((prevUserArr) => {
      return [
        ...prevUserArr,
        { name: uname, age: uage, key: Math.random().toString() },
      ];
    });
  };
  console.log(userArr);
  return (
    <>
      <AddUser onAddUser={UserHandler} />
      <UsersList users={userArr} />;
    </>
  );
}

export default App;
