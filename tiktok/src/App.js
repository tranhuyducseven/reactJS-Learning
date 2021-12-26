import { useReducer, useRef } from "react";
//todoList
//b1 init state
const initState = {
  job: '',
  jobs: []
}
//b2 actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'
const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}
const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}
const removeJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}
//b3 reducers
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
    case DELETE_JOB:
      return{
        ...state,
        jobs: state.jobs
      }
    default:
      throw new Error('Invalid action')
  }

}

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const { job, jobs } = state
  const inputRef = useRef()
  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }
  return (
    <div className="App" style={{ padding: 20 }}>
      <h3>TO DO</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit} >Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}
            <span onClick={dispatch(removeJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );

}
export default App;
