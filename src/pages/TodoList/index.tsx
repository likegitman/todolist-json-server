import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as C from "../../components";
import dummy from "../../db/todos.json";

function TodoList() {
  

  return (
    <S.TodoListContainer>
      <h2>오늘의 TodoList</h2>
      <C.TodoInventory />
      <C.PostTodo />
    </S.TodoListContainer>
  );
}

export default TodoList;
