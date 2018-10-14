import React, { Component } from 'react';

import Trap from 'react-trap';

export default class App extends Component {
  render() {
    return (
      <div>
        <Trap event="click mouseover">
          {
            (trapped, ref) => (
              <div ref={ref}>{trapped ? "In" : "Out"}</div>
            )
          }
        </Trap>
      </div>
    )
  }
}
