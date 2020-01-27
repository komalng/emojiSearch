import React from 'react';
import Emoji from './../Emojis.json'

export default class Input extends React.Component {
  state = {
    value: '',
    isMouseInside: false

  }

  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  }
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    // console.log(this.state.value);
    const mystyle = {
      width: "90%",
      margin: '0.8rem',
      height: '30px',
      textAlign: 'left',
      border: "1px solid black"

    }
    return (
      <div>
        <h2 style={{ textAlign: 'center', color: 'brown' }}>Search Emoji</h2>
        <input type='text' style={mystyle} name='value' onChange={this.onChange} />
        {this.state.value.length > 1 ?
          Emoji.filter(element => element.keywords.includes((this.state.value).toLowerCase())).map(item =>
            <div onMouseOver={this.mouseEnter} onMouseLeave={this.mouseLeave}>
              <hr />
              <div><h4>{`${item.symbol}   ${item.title}`}</h4></div>
              {this.state.isMouseInside ? <button>Your Button</button> : null}
            </div>) :
          Emoji.slice(1, 20).map(item =>
            <div>
              <hr />
              <h4>{`${item.symbol}   ${item.title}`}</h4>
            </div>)}

      </div>
    )
  }

}