import { useState, useReducer } from 'react';


//useReducer
// 1. init State 
// 2. actions
// 3. Reducer
// 4. dispatch

const initState = 0;
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid action: ');
  }
}
function App() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div style={{ padding: 32 }}>
      <h1>{count}</h1>
      <button
        onClick={()=>dispatch(UP_ACTION)}
      >UP</button>
      <button
        onClick={()=>dispatch(DOWN_ACTION)}
      >DOWN</button>
    </div>

  )

}

export default App;
