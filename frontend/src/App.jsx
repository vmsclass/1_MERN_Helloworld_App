import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/hello")
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>VMS CLASS</h1>
      <h2>Hello World : MERN Project</h2>
      <p>{data}</p>
    </div>
  );
}

export default App;
