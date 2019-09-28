import React, { PureFunction } from 'react';
import './style.css';

export default class DiscButton extends PureFunction {
  render() {
    return (
      <div className="install">
        <button type="button">Add DuckDuckGo to Firefox</button>
      </div>
    );
  }
}
