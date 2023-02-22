import { useState, useEffect } from "react";
import React from "react";
import Form from "./Form";
// import List from "./List";
import Table from "./Table";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, [reqType]);

  return (
  <React.Fragment>
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <List items={items} /> */}
      <Table items={items} />
      </div>
      </React.Fragment>
  );
}

export default App;

// useEffect(() => {
//   fetch("dataUsers ${users}").then(async (r) => {
//     const response = await r.json.st;
//     setUsers(response.users);
//   });
// }, []);

// const Header = async() => {

//   const getHeader = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     }
//   };
//   const reqUrl = `${API_URL}/${id}`;
//   const result = await apiRequest(reqUrl, getHeader);
//   if (result) setFetchError(result);
// };
