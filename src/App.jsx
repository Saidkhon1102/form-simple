import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },
    { id: 4, name: "Diana", age: 28, email: "diana@example.com" },
    { id: 5, name: "Ethan", age: 27, email: "ethan@example.com" },
  ]);

  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id != id);
    setUsers(filteredUsers);
  };
  const name = useRef();
  const email = useRef();
  const age = useRef();

  const handeSubmit = (e) => {
    e.preventDefault();
    const newName = name.current.value.trim();
    const newEmail = email.current.value.trim();
    const newAge = age.current.value.trim();

    if (!newName || !newEmail || !newAge) {
      return;
    }

    const newUser = {
      id: uuidv4(),
      name: newName,
      email: newEmail,
      age: Number(newAge),
    };

    setUsers([...users, newUser]);

    
    name.current.value = "";
    email.current.value = "";
    age.current.value = "";
  };

  return (
    <div className="center-container">
      <form onSubmit={handeSubmit}>
        <div className=" text-amber-200 form-group">
          <label htmlFor="">name</label>
          <input type="text" ref={name} />
        </div>
        <div className="form-group">
          <label htmlFor="">email</label>
          <input type="email" ref={email} />
        </div>
        <div className="form-group">
          <label htmlFor="">Age</label>
          <input type="number" ref={age} />
        </div>
        <button type="submit">Add user</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
