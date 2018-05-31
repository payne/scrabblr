import React from "react";
import { MyContext } from "./App.js";
import Scrabble from "./Scrabble.js";

class GameArea extends React.Component {
  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div>
            <Scrabble
              tiles={context.state.tiles}
              updateTiles={context.updateTiles}
            />
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
export default GameArea;