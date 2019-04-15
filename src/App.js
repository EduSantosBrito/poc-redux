import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickButton, addCount } from "./actions";

class App extends Component {
  state = {
    inputValue: ""
  };
  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    const { newValue, count } = this.props;
    const { inputValue } = this.state;
    return (
      <div className="App" style={{ paddingTop: "10px" }}>
        <input onChange={this.inputChange} type="text" value={inputValue} />
        <button onClick={() => this.props.clickButton(inputValue)}>
          Click me!
        </button>
        <h1>{newValue}</h1>
        <h1>{count}</h1>
        <button onClick={() => this.props.addCount()}>a</button>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  count: store.countState.count
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton, addCount }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
