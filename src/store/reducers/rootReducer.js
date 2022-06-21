const initialState = {
  isAuthenticated: false,
  todos: [{ id: 1, message: "hello", status: "inprogress" }],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    case "ADD_TODO":
      return { ...state, todos: [action.payload, ...state.todos] };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo?.id !== action.payload),
      };
    case "CHANGE_STATUS_TODO":
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
