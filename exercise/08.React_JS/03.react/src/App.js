import React, { useEffect, useState } from "react";
import Form from "./Form";
// import List from "./List";
import Table from "./Table";
import Header from "./Header";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";

  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        // console.log(data);
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, [reqType]);

  

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


  
  
  return (
    <React.Fragment>
      <Header header={header} setHeader={setHeader} />
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <List items={items} /> */}
      <Table items={items} />
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
