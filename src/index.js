import React from "react";
import ReactDOM from "react-dom";
import HomeComponent from "./HomeComponent";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React JS: Normal React Component VS PureComponent</h1>
      <HomeComponent />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// class Todos extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [
//         { title: "take out the trash", done: false, notes: ["boring"] },
//         { title: "walk dog", done: true, notes: ["exercise"] },
//         { title: "read about React", done: false, notes: ["fun!"] }
//       ]
//     };
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState(oldState => {
//         return { todos: [...oldState.todos] };
//       });
//     }, 1000);
//   }

//   render() {
//     console.log("Todos render called  React.Component");
//     return (
//       <div>
//         {this.state.todos.map((todo, i) => {
//           return (
//             <TodoItem
//               key={i}
//               title={todo.title}
//               done={todo.done}
//               notes={todo.notes}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

// class TodoItem extends React.PureComponent {
//   render() {
//     console.log("TodoItem render called React.PureComponent");
//     return (
//       <div>
//         {this.props.done ? "✓" : "▢"} {this.props.title}(
//         {this.props.notes.join(", ")})
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Todos />, document.getElementById("root"));
