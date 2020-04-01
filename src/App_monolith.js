import React from "react";
import "./App.css";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: Math.floor(Math.random() * 100),
            inputNum: "empty",
            attempts: 0,
            message: {
                text: "",
                color: "black"
            }
        };
        this.grabLatestInput = this.grabLatestInput.bind(this);
        this.playGame = this.playGame.bind(this);
    }

    grabLatestInput(e) {
        this.setState({ inputNum: +e.target.value });
    }

    playGame() {
        console.log(this.state.num, this.state.inputNum);

        let nstate = this.state;
        if (
            typeof this.state.inputNum != "number" ||
            isNaN(this.state.inputNum)
        ) {
            nstate.message = { text: "Invalid input", color: "red" };
        } else if (this.state.num === this.state.inputNum) {
            nstate.message = {
                text: "Well played.",
                color: "green"
            };
            nstate.attempts++;
        } else if (this.state.num < this.state.inputNum) {
            nstate.message = {
                text: "Aim lower",
                color: "black"
            };
            nstate.attempts++;
        } else {
            nstate.message = {
                text: "Aim higher",
                color: "black"
            };
            nstate.attempts++;
        }
        this.setState(nstate);
    }

    render() {
        return (
            <div className="App">
                <h2>Guess the number between 1 to 100</h2>
                <input type="text" onChange={this.grabLatestInput} />
                <button onClick={this.playGame}>Play</button>
                <div>Attemps: {this.state.attempts}</div>
                <div style={{ color: this.state.message.color }}>
                    {this.state.message.text}
                </div>
            </div>
        );
    }
}

export default App;
