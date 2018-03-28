import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBox.css';

class SearchBox extends Component {
  static propTypes = {
    onChange: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
   this.setState({value: event.target.value});
   if(this.props.onChange) {
     this.props.onChange(event.target.value);
   }
 }

  render() {
    return (
      <input id="searchBox"
        type="search"
        style={this.props.style}
        placeholder={this.props.placeholder}
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBox;
