import React from "react";
import "./App.css";
import Table from "./components/Table";

const App = () => {
  return <Table />;
};
// feching API with Function Component
// const App = () => {
//   const [data, setData] = React.useState([]);
//   const [show, setShow] = React.useState(false);
//   React.useEffect(() => {
//     getData();
//   }, []);
//   const getData = () => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then(response => setData(response.data.slice(0, 50)))
//       .catch(err => console.log(err));
//   };
//   const haddelDelete = id => {
//     setData(data => data.filter(d => d.id !== id));
//   };
//   const showTable = () => {
//     setShow(!show);
//   };
//   return (
//     <Table
//       data={data}
//       showTable={showTable}
//       show={show}
//       haddelDelete={haddelDelete}
//     />
//   );
// };

export default App;
