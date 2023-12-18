import AddUser from "./components/Users/AddUser.jsx";
import UsersList from "./components/Users/UsersList.jsx";

function App() {
  return (
    <>
      <AddUser />
      <UsersList users={[{ name: "prashant", age: 20 }]} />;
    </>
  );
}

export default App;
