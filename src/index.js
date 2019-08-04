import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class P1PureComponent extends React.PureComponent {
  // constructor(props){
  //    super(props)
  // }
  componentDidMount() {
    console.log("componentDidMount PureComponent");
  }
  render() {
    console.log("render PureComponent");
    return <div>Parent PureComponent {this.props.user.name}</div>;
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comp: "   P1",
      user: {
        name: "rahul"
      }
    };
    this.chanrtext = this.chanrtext.bind(this);
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }
  componentDidMount() {
    console.log("componentDidMount P1");
  }
  chanrtext() {
    this.setState({
      comp: "Parent Main",
      user: {
        name: "rahul Saxena"
      }
    });
  }
  render() {
    console.log("render P1");
    const { user } = this.state;
    return (
      <div>
        <input type="button" value="TTT" onClick={this.chanrtext} />
        Parent{this.state.comp}
        <P1PureComponent user={user} />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Parent />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
