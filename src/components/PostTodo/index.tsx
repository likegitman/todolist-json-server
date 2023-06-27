import React, { useState } from "react";
import * as S from "./style";
import {HiPaperAirplane} from "react-icons/hi";
import axios from "axios";

function PostTodo() {
  const [text, setText] = useState("");
  const baseURL = "http://localhost:3003/todos"

  const postTodos = () => {
    axios.post(baseURL, {
      text,
      isDone: false,
    }).then(()=>{
      alert("새로운 todo를 생성했습니다!");
      setText("");
      window.location.reload();
    }).catch((err)=>{
      alert(err);
    });
  };

  return (
    <S.PostTodoContainer>
      <input
        type="text"
        value={text}
        placeholder="오늘의 할 일을 입력해주세요!"
        onChange={(e) => setText(e.target.value)}
      />
      <HiPaperAirplane onClick={postTodos}/>
    </S.PostTodoContainer>
  );
}

export default PostTodo;
