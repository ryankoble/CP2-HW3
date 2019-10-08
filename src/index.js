import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class NamePage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Greetings, traveler! What is your name?
          <br />
          <input
            type="text"
            value={this.props.data.name}
            onChange={(event) => this.props.setStateFunction("name", event.target.value)}
          />
        </p>
        <button onClick={() => this.props.goFunction(StartPage)}>Continue...</button>
      </div>
    );
  }
}

class StartPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome, {this.props.data.name}! How would you like to get to your
          destination?
        </p>
        <button onClick={() => this.props.goFunction(TrainPage)}>Train</button>
        <button onClick={() => this.props.goFunction(ShipPage)}>Ship</button>
      </div>
    );
  }
}

class TrainPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome aboard the choo-choo train! Please make your way to your seat.
          What is the number?
          <br /> 
          <select
          value={this.props.data.option}
          onChange={(event) => this.props.setStateFunction("name", event.target.value)}>
           <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
             <option value="cat">Cat</option>
               <option value="hamster">Hamster</option>
          </select>
        </p>
        <button onClick={() => this.props.goFunction(SeatPage)}>Continue...</button>
      </div>
    );
  }
}

class ShipPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Your ship crashed and you are about to drown.
          What do you do?
        </p>
        <button onClick={() => this.props.goFunction()}>Die</button>
        <button onClick={() => this.props.goFunction(LivePage)}>Live</button>
      </div>
    );
  }
}

class LivePage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Congrats! You didn't die.
          <br />
          <img src="https://www.google.com/search?q=life&sxsrf=ACYBGNQvTz9DtBRVCCFqda0kG8dIPTmrHw:1569903132630&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjMibX0mPrkAhVKITQIHUe2BkgQ_AUIEigB&biw=1680&bih=939#imgrc=RQySECnDAHP_rM:"></img>
        </p>
      </div>
    );
  }
}

class SeatPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Your seat number is: {this.props.data.name}
        </p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageClass: NamePage
    };
  }

  goToPage(pageClass) {
    this.setState({
      pageClass: pageClass
    });
  }

  render() {
    var app = this;
    
    function setState(key, value) {
      let newState = {};
      newState[key] = value;
      app.setState(newState);
    }
    
    function goFunction(pageClass) {
      app.goToPage(pageClass);
    }

    return (
      <div className="App">
        <this.state.pageClass
          data={this.state}
          setStateFunction={setState}
          goFunction={goFunction}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);