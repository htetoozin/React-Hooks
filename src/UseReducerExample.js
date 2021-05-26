import React, { useReducer } from 'react';

//state or store
const initalState = {
  count: 1,
};

function reducer(state, action) {
  console.log('state ', state, 'action ', action);
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw Error();
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <div>
      <p>Count {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default UseReducerExample;
