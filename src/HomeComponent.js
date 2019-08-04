import React from "react";
import PureComponent from "./PureComponent";

export default class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: "ParentComponent",
      user: {
        name: "rahul",
        id: 10101
      }
    };
    this.chanrtext = this.chanrtext.bind(this);
    this.changePureCompnnt = this.changePureCompnnt.bind(this);
  }

  componentDidMount() {
    // console.log("componentDidMount ParentComponent");
    // setInterval(() => {
    //   this.setState(oldState => {
    //     return { user: oldState.user };
    //   });
    // }, 1000);
  }
  chanrtext() {
    const userCopy = this.state.user;
    userCopy.id = Math.random();
    userCopy.name = "Rahul Saxena";
    this.setState({
      componentName: "ParentComponent Dashboard",
      user: userCopy
    });
    // this.setState(oldState => {
    //   return { user: oldState.user };
    // });
  }

  changePureCompnnt() {
    this.setState({
      user: {
        name: "rahul Saxena",
        id: Math.random()
      }
    });
    // this.setState(oldState => {
    //   return { user: oldState.user };
    // });
  }
  render() {
    console.log("render() method called ParentComponent");
    const { user } = this.state;
    return (
      <div>
        <input
          type="button"
          value="Change User ID value"
          onClick={this.chanrtext}
        />
        <input
          type="button"
          value="change PureCompnnt value"
          onClick={this.changePureCompnnt}
        />
        <br />
        Normal React Component: {this.state.user.id}
        <br />
        <PureComponent user={user} />
      </div>
    );
  }
}
