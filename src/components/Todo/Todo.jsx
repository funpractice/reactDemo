import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAction,
  changeStatusTodoAction,
  removeTodoAction,
} from "../../store/actions/actionCreators/authenticationActions";

const Todo = () => {
  const rootReducer = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();
  const [val, setval] = useState("");
  const [id, setid] = useState(2);
  const [filter, setFilter] = useState("");
  const [todos, settodos] = useState([]);

  useEffect(() => {
    settodos(rootReducer.todos);
  }, [rootReducer.todos]);

  const handleChange = (e) => {
    setval(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(addTodoAction({ id: id, message: val, status: "pending" }));
    setid(id + 1);
    setval("");
  };
  const handleRemove = (id) => {
    dispatch(removeTodoAction(id));
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
    if (e.target.value === "All") {
      settodos(rootReducer.todos);
    } else {
      let newTodos = rootReducer?.todos;
      const filteredTodos = newTodos.filter(
        (todo) => todo.status === e.target.value
      );
      settodos(filteredTodos);
    }
  };
  const handleChangeStatus = (id, e) => {
    const todos = rootReducer?.todos?.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: e.target.value };
      } else {
        return todo;
      }
    });
    dispatch(changeStatusTodoAction(todos));
  };
  return (
    <div>
      <select value={filter} onChange={(e) => handleFilter(e)}>
        <option>All</option>
        <option>pending</option>
        <option>inprogress</option>
        <option>completed</option>
      </select>

      {todos?.map((todo) => {
        return (
          <div key={todo?.id} style={{ color: "#000" }}>
            {todo?.message}
            <select
              value={todo?.status}
              onChange={(e) => handleChangeStatus(todo?.id, e)}
            >
              <option>pending</option>
              <option>inprogress</option>
              <option>completed</option>
            </select>
            <button onClick={() => handleRemove(todo?.id)}>Remove</button>
          </div>
        );
      })}
      <input value={val} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Todo;
