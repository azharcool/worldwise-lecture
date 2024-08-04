import React, { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// const CountContext = createContext(0);

// function useCount() {
//   const context = useContext(CountContext);
//   return context;
// }

// function Home() {
//   return (
//     <div>
//       <List />
//       <Profile />
//     </div>
//   );
// }

// function Profile() {
//   const countValue = useCount();

//   return <div>Profile {countValue.count}</div>;
// }

// function List() {
//   const countValue = useCount();

//   return (
//     <div>
//       List {countValue.count}
//       <button
//         onClick={() => {
//           countValue.setCount(100);
//         }}
//       >
//         update
//       </button>
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <CountContext.Provider
//       value={{
//         count,
//         setCount,
//       }}
//     >
//       <div
//         style={{
//           background: "black",
//           minHeight: "100vh",
//         }}
//       >
//         <Home />
//       </div>
//     </CountContext.Provider>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
