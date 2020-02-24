const initState = {
  todos: []
};
const rootReducer = (state = initState, action) => {
  console.log(action);
  if (action.type === "DELETE_TODO") {
    const filteredTodo = state.todos.filter(todo => {
      return todo.id !== action.id;
    });
    return {
      ...state,
      todos: filteredTodo
    };
  }
  if (action.type === "ADD_TODO") {
    let newTodoList = [...state.todos, action.todo];
    return { ...state, todos: newTodoList };
  }
  return state;
};

export default rootReducer;
