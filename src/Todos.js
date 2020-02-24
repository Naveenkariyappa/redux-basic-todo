import React from "react";

const Todos = ({ todo, deleteTodo }) => {
  const todoList = todo.length ? (
    todo.map(todo => {
      return (
        <div className="collection-item center" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      );
    })
  ) : (<p className="center">You have no todos</p>);
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
