import React, { Component } from 'react';

class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    });
    this.setState({
      text: '',
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
            <label>add band</label>
            <input
          type="text"
          onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
       </form>
       {this.state.text}
     </div>
   );
  }
};

export default BandInput;
