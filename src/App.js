import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        // console.warn("result", resp);
        setData(resp);
      });
    });
  }, []);
  console.warn(data);
  return (
    <div className="App">
      <h1>Get API</h1>
      <table border = "1">
        <tr>
          <td>id</td>
          <td>name</td>
          <td>Username</td>
          <td>email</td>
          <td>Address</td>
        </tr>
        {
          data.map((item)=>
          <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.username}</td>
          <td>{item.email}</td>
          <td>{item.address.street}</td>
        </tr>
          )
        }
      </table>
    </div>
  );
}
export default App;
