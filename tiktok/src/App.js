import { useStore, actions } from "./store";

export default function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
  }
  return (
    <div className="App">
      <input
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

