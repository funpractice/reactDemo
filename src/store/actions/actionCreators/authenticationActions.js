export const loginAction = () => {
  return { type: "LOGIN" };
};
export const logouAction = () => {
  return { type: "LOGOUT" };
};
export const addTodoAction = (payload) => {
  return { type: "ADD_TODO", payload: payload };
};
export const removeTodoAction = (payload) => {
  return { type: "REMOVE_TODO", payload: payload };
};
export const changeStatusTodoAction = (payload) => {
  return { type: "CHANGE_STATUS_TODO", payload: payload };
};
