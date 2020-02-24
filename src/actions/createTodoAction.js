export const createTodo= (todo) =>{
    return {
      type: "ADD_TODO",
      todo
    };
}