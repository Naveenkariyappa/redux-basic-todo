import React from "react";
import Todos from "./Todos";
import AddForm from "./AddForm";
import { connect } from "react-redux";
import { deleteTodo } from "./actions/deleteTodoAction";

function App(props) {
  const todos = props.todos;
  const deleteTodoById = id => {
    props.deleteTodo(id);
  };

  return (
    <div className="todo-app container ">
      <h1 className="center blue-text">Todos</h1>
      <Todos todo={todos} deleteTodo={deleteTodoById} />
      <AddForm/>
    </div>
  );
}

const mapStateToProps = todos => {
  return todos;
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => {
      dispatch(deleteTodo(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
