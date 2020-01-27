import React from 'react';
import Emoji from './../Emojis.json'

export default class InputRefactor extends React.Component {
  state = {
    value: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const mystyle = {
      width: "90%",
      margin: '0.8rem',
      height: '30px',
      textAlign: 'left',
      border: "1px solid black"

    }
    const { value } = this.state;
    const inSearch = value.length > 1;
    return (
      <div>
        <h2 style={{ textAlign: 'center', color: 'brown' }}>Search Emoji</h2>
        <input type='text' style={mystyle} name='value' onChange={this.onChange} />
        {inSearch &&
          Emoji.filter(element => element.keywords.includes((value).toLowerCase())).map(item => (
            <div>
              <hr />
              <h4>{`${item.symbol}   ${item.title}`}</h4>
              <h1>komal</h1>
            </div>
          ))}
        {!inSearch &&
          Emoji.slice(1, 20).map(item =>
            <div>
              <hr />
              <h4>{`${item.symbol}   ${item.title}`}</h4>
            </div>)}

      </div>
    )
  }

}