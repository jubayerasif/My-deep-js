///////////////////Part 1

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   let person = {
//     name: "John Wick",
//     age: "35",
//     job: "Assassin",
//   };
//   let style = {
//     color: "yellow",
//     backgroundColor: "red",
//   };
//   let style2 = {
//     marginTop: "-15px",
//     marginBottom: "-25px",
//   };
//   const personName= ['Sakib Al Hasan', 'Samim Hasan', 'Hasif Khan', 'Rakib Jaman']
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit Done <code>src/App.js</code> and save to reload.
//         </p>
//         {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a> */}
//         <h4>My Heading: {(2 + 5) * 25 + 65}</h4>
//         <h1 style={style2}>Name: {person.name}</h1>
//         <h1 className="" style={style}>
//           Job: {person.job}
//         </h1>
//         <ul>
//           {
//             personName.map(personName => <li>{personName}</li>)
//           }
//           {/* <li>{personName[0]}</li>
//           <li>{personName[1]}</li>
//           <li>{personName[2]}</li> */}
//         </ul>

//         {/* <p>My first React Paragraph</p> */}
//         {/* <Person name="Sakib Al Hasan" address = "Chittagong"></Person>
//         <Person name="Samim Hasan" address = "Dhaka"></Person>
//         <Person name="Hasif Khan" address = "Feni"></Person> */}
//         <Person name={personName[0]}address = "Chittagong"></Person>
//         <Person name={personName[1]} address = "Dhaka"></Person>
//         <Person name={personName[2]}  address = "Feni"></Person>
//       </header>
//     </div>
//   );
// }

// function Person(props) {
//   const style = {
//     marginTop: "-5px",
//     marginBottom: "25px",
//     border: "2px solid red",
//     borderRadius: "15px",
//   };
//   return (
//     <div style={style}>
//       <h3>Name: {props.name}</h3>
//       <h3>Name: {props.address}</h3>
//       <h4>Hero of {props.address} city</h4>
//     </div>
//   );
// }

// export default App;

///////////////////Part 2

import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const personName= ['Sakib Al Hasan', 'Samim Hasan', 'Hasif Khan']
  const product = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "Adobe XD", price: "$50.99" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product> */}
        <ul>
          {product.map((product) => (
            <Product product={product}></Product>
          ))}
        </ul>
        {/* <Product product={product[0]}></Product>
        <Product product={product[1]}></Product>
        <Product product={product[2]}></Product> */}
      </header>
    </div>
  );
}

function Counter(props) {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    setCount(count +1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const style = {
    margin: '5px'
  }
  return (
    <div>
      <h1> Count: {count}</h1>
      <button onClick={handleIncrease} style={style}>Increase</button>
      <button onMouseMove={handleIncrease} style={style}>Massive Increase</button>
      <button onClick={handleDecrease} style={style}>Decrease</button>
      <button onMouseMove={handleDecrease} style={style}>Decrease</button>
    </div>
  );
}

function Users(props){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ol>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ol>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: "2px solid red",
    borderRadius: "5px",
    backgroundColor: "lightgrey",
    height: "200px",
    width: "200px",
    float: "left",
    border: "2px solid red",
    borderRadius: "15px",
    color: "#000",
    margin: "10px",
  };
  return (
    <div style={productStyle}>
      {/* <h4>Name: {props.name}</h4>
      <h5>Price: {props.price}</h5> */}
      <h4>Name: {props.product.name}</h4>
      <h5 style={{ marginTop: "-20px", marginBottom: "-5px" }}>
        Price: {props.product.price}
      </h5>
      <button>Buy now</button>
    </div>
  );
}

export default App;
