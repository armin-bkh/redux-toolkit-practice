import http from "./httpServices";

const postTodo = (todo) => {
  return http.post("/todos", todo);
};

export default postTodo;
