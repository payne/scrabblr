import React from "react";
import { MyContext } from "./App.js";

class Scoreboard extends React.Component {
  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div className="scoreboard-wrapper">
            <div className="scoreboard">
              {context.state.isInGameLoop ? (
                <h2 className="scoreboard-score animated fadeIn">
                  Score <br /> {context.state.score}
                </h2>
              ) : null}

              {context.state.isInGameLoop ? (
                <h2 className="scoreboard-found-words animated fadeIn">
                  Found <br /> {context.state.foundWords.length}
                </h2>
              ) : null}

              {context.state.isInGameLoop ? (
                <h2 className="scoreboard-words-left animated fadeIn">
                  Remaining <br />
                  {context.state.remainingMatches.length}
                </h2>
              ) : null}

              {/* <h2 className="timer">Time : {context.state.time}</h2> */}

              {!context.state.isInGameLoop ? (
                <p className="scoreboard-instructions animated fadeIn">
                  Find all valid words in a scrambled eight letter word!
                </p>
              ) : null}

              {!context.state.isInGameLoop ? (
                <button
                  className="scoreboard-start-button animated fadeInUp"
                  onClick={context.startGameloop}
                >
                  Start
                </button>
              ) : (
                <button
                  className="scoreboard-surrender-button animated fadeInDown"
                  onClick={context.endGameLoop}
                >
                  Surrender
                </button>
              )}
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
export default Scoreboard;
