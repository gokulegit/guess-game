import React from "react";
import GuessGame from "./GuessGame";
import KeyPadComponent from "../components/KeyPadComponent";

class GameComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            start: props.start,
            end: props.end,
            game: new GuessGame(props.start, props.end),
            highlight: {
                hs: props.start,
                he: props.end
            }
        };

        this.onInputChanged = this.onInputChanged.bind(this);
        this.playGame = this.playGame.bind(this);
        //this.onInputKeyUp = this.onInputKeyUp.bind(this);
    }

    static getDerivedStateFromProps({ start, end }, state) {
        if (state.start !== start || state.end !== end) {
            return {
                highlight: { hs: start, he: end },
                start,
                end,
                game: new GuessGame(start, end),
            };
        }
        return null;
    }

    onInputChanged(e) {
        this.playGame(+e.target.value);
    }

    /*onInputKeyUp(e) {
        if (e.keyCode === 13) {
            this.playGame();
            e.target.select();
        }
    }*/

    playGame(guess) {
        let { game } = this.state;

        try {
            game.playGame(guess);

            let progress = game.progress;
            let { hs, he } = this.state.highlight;

            let nhs = progress === 1 ? guess : hs;
            let nhe = progress === -1 ? guess : he;


            this.setState({
                game,
                highlight: { hs: nhs, he: nhe },
                error: ""
            }, () => {
                if (this.state.game.gameOver) {
                    this.props.onGameOver(this.state.game.attempts)
                }
            });
        } catch (e) {
            this.setState({ game, error: e.message });
        }
    }

    render() {
        let { message, attempts } = this.state.game;
        let { hs, he } = this.state.highlight;
        let { start, end } = this.props;
        return (
            <div>
                {/*
                
                Render input area ----------
                <input
                    onChange={this.onInputChanged}
                    onKeyUp={this.onInputKeyUp}
                />
                <button disabled={gameOver ? true : ""} onClick={this.playGame}>
                    Guess
                </button> 
                
                */}

                <div
                    style={{
                        textAlign: "left",
                        margin: `0 auto 0 auto`,
                        width: `350px`
                    }}
                >
                    <KeyPadComponent
                        hs={hs}
                        he={he}
                        start={start}
                        end={end}
                        onClick={this.onInputChanged}
                    />
                </div>

                {/* ---------------------------- */}

                {/* Display validation message 
                {this.state.error && (
                    <div style={{ color: "red" }}>{this.state.error}</div>
                )}*/}

                {/** Display advise */}
                <h3 style={{ color: message.color }}>{message.text}</h3>

                {/* Display attempt number */}
                {attempts.length > 0 && (
                    <p style={{ fontSize: `11px` }}>
                        Attempt {attempts.length}
                    </p>
                )}

                {/** Display stats 
                {gameOver && (
                    <GameGrid />
                )}*/}
            </div>
        );
    }

}
export default GameComponent;
