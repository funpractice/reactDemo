import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  loginAction,
  logouAction,
} from "../../store/actions/actionCreators/authenticationActions";

const DropDown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [val, setval] = useState("");
  const handleChange = (e) => {
    setval(e.target.value);
    if (e.target.value === "login") {
      dispatch(loginAction());
      navigate("/todo");
    } else if (e.target.value === "logout") {
      dispatch(logouAction());
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <select value={val} onChange={(e) => handleChange(e)}>
        <option></option>
        <option>login</option>
        <option>logout</option>
      </select>
    </div>
  );
};

export default DropDown;
