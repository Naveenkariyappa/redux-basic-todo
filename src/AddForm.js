import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions/createTodoAction";

const AddForm = props => {
  const [state, setstate] = useState({ content: "" });

  const handleChange = e => {
    setstate({ content: e.target.value });
  };

  const submitTodo = e => {
    props.addTodoToStore(state);
    setstate({ content: "" });
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitTodo}>
        <label>Add New Todo</label>
        <input type="text" onChange={handleChange} value={state.content} />
      </form>
    </div>
  );

};
const mapStateToProps = todos => {
  return todos;
};

const mapDispatchToProps = dispatch => {
  return {
    addTodoToStore: todo => {
      todo.id = Math.random();
      dispatch(createTodo(todo));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
