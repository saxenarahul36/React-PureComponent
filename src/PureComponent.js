import React from "react";

export default class PureComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: "take out the trash", done: false, notes: ["boring"] },
        { title: "walk dog", done: true, notes: ["exercise"] },
        { title: "read about React", done: false, notes: ["fun!"] }
      ]
    };
  }
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
