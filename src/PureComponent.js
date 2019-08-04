import React from "react";

export default class PureComponent extends React.PureComponent {
  componentDidMount() {
    console.log("componentDidMount PureComponent");
  }
  render() {
    console.log("render PureComponent");
    return (
      <div>
        PureComponent React Component : Will not rerender after setState
        <br />
        {JSON.stringify(this.props)}
      </div>
    );
  }
}
