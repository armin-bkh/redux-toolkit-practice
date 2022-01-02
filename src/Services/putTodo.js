import http from "./httpServices";

const putTodo = (id, todo) => {
  return http.put(`/todos/${id}`, todo);
};

export default putTodo;
