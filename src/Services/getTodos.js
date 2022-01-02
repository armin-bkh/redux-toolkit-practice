import http from "./httpServices";

const getTodos = () => {
  return http.get("/todos");
};

export default getTodos;
