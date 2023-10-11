import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.users);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h2>DUMMY DATA</h2>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-Mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={item.image} alt="" />
              </td>{" "}
              {/* You can display the profile pic here */}
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.domain}</td>
              <td>{item.ip}</td>
              <td>{item.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
