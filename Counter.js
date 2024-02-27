// import React, { Component, useState } from "react";

// class Counter extends Component {
//   render() {
//     const [count, setcount] = useState(0);

//     return <div>Counter
//         <button> increment</button>
//         <button>decrement</button>
//     </div>;
//   }
// }

// export default Counter;
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Increment the counter
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Decrement the counter
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
