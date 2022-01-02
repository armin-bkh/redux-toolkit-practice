import http from "./httpServices";

const deleteTodo = (id) => {
  return http.delete(`/todos/${id}`);
};

export default deleteTodo;
