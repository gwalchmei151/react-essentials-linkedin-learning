import React from "react";
import './App.css';
import restaurant from "../src/restaurant.jpg"

function Header(props){
  // console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  // console.log(props);
  return (
    <section>
      <p>We serve the most {props.adjective} food around</p>
      <img src={restaurant} height= {200} alt="napking and silverware at a restaurant table"/>
      <ul style = {{textAlign: "left"}}>
        {props.dishes.map((dish) => (
        <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  // console.log(props);
  return (
    <footer>
      <p>Copyright {props.year} </p>
    </footer>
  );
}

const dishes = [
  "Mac and Cheese",
  "Salmon",
  "Tofu and Veggies",
  "Minestrone"
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish}));
console.log(dishObjects);


function App() {
  return (
    <div className="App">
      <Header name="Tushar" />
      <Main adjective = "amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
