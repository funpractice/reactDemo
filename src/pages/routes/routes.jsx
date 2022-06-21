import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DropDown from "../../components/Drop-down/DropDown";
import Login from "../../components/Login/Login";
import Todo from "../../components/Todo/Todo";
import ProtectedRoute from "../../hoc/ProtectedRoute";
const RootRoutes = () => {
  return (
    <Router>
      <DropDown />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/todo"
          element={
            <ProtectedRoute>
              <Todo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default RootRoutes;
