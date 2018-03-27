import React, { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Index from '../Index/Index';


class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.onSearchBoxUpdate = this.onSearchBoxUpdate.bind(this);
  }

  onSearchBoxUpdate(value) {
    this.setState({
      value: value
    });
  }

  _recursivelyPopulateChildrenProps(children) {
    children = children.length > 1 ? children : [children]
    let {appId, apiKey} = this.props;
    let onSearchBoxUpdate = this.onSearchBoxUpdate;
    return children.map((children, key) => {
      switch(children.type) {

      case SearchBox:
        let searchBoxComponent = React.cloneElement(children, {
          appId,
          apiKey,
          key,
          onChange: onSearchBoxUpdate,
        });
        return searchBoxComponent;

      case Index:
        let indexComponent = React.cloneElement(children, {
          appId,
          apiKey,
          key,
          value: this.state.value
        });
        return indexComponent;

      default:
        if (children.props.children && children.props.children.type) {
          return React.cloneElement(children, {
            key,
            children: this._recursivelyPopulateChildrenProps(children.props.children)
          });
        } else {
          return children;
        }
      }
    });
  }

  render() {
    return (
      <div style={{width:'100%'}}>
        {this.props.children && this._recursivelyPopulateChildrenProps(this.props.children)}
      </div>
    );
  }
}

export default AutoComplete;
