import React from 'react';

class CopyExample extends React.Component {
  constructor() {
    super();
    this.state = {
      isMouseInside: false
    }
  }
  // move = () => {
  //   <h1>okay</h1>;
  // }
  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  }
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  }
  render() {
    return (
      <div onMouseOver={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        {this.state.isMouseInside ? <button>Your Button</button> : null}
        <h1>jiii</h1>
      </div>
    );
  }
}



export default CopyExample;