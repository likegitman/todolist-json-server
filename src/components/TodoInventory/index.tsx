import React from "react";
import * as S from "./style";
import * as C from "../index";
import useFetch from "../hooks/useFetch";

function TodoInventory() {
  const baseURL = "http://localhost:3003/todos";
  const todos = useFetch(baseURL);
  const doneTodos = useFetch(baseURL, true);

  return (
    <>
      <C.TodoCounter count={doneTodos.length}/>
      <S.TodoInventoryContainer>
        {todos.map((todo, idx) => (
          <C.TodoListItem key={idx} todos={todo} />
        ))}
      </S.TodoInventoryContainer>
    </>
  );
}

export default TodoInventory;
