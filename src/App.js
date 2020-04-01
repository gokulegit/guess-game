import React from "react";
import GameComponent from "./components/GameComponent";
import "./App.css";
import GameGrid from "./components/GameGrid";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { start: 1, end: 100, attempts: [] };
        this.startChanged = this.startChanged.bind(this);
        this.endChanged = this.endChanged.bind(this);
        this.gameOverHandler = this.gameOverHandler.bind(this);
    }

    startChanged(e) {
        let val = +e.target.value;
        if (isNaN(val) || val > 10000 || val < 0) {
            e.target.select();
            return;
        }
        this.setState({ start: +e.target.value, attempts: [] });
    }

    endChanged(e) {
        let val = +e.target.value;
        if (isNaN(val) || val > 10000 || val < 0) {
            e.target.select();
            return;
        }
        this.setState({ end: +e.target.value, attempts: [] });
    }

    gameOverHandler(attempts) {
        console.log('game over...', attempts)
        this.setState({
            attempts
        })
    }

    render() {
        let { start, end, attempts } = this.state;
        return (
            <div className="App">
                <h2>Guess the hidden number</h2>
                <input
                    onChange={this.startChanged}
                    value={this.state.start}
                    placeholder="start"
                />
                <input
                    onChange={this.endChanged}
                    value={this.state.end}
                    placeholder="end"
                />
                <GameComponent start={start} end={end} onGameOver={this.gameOverHandler} />
                {attempts.length > 0 && <GameGrid attempts={attempts} />}
            </div>
        );
    }
}

export default App;
