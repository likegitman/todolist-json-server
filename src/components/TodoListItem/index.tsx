import React, { useRef, useState } from "react";
import * as S from "./style";
import { BiPencil } from "react-icons/bi";
import { BsTrash3Fill, BsFillPatchCheckFill } from "react-icons/bs";
import { HiMiniPencilSquare } from "react-icons/hi2";
import axios from "axios";

interface TodoListItemProps {
  todos: { id: number; text: string; isDone: boolean };
}

function TodoListItem({ todos }: TodoListItemProps) {
  const baseURL:string = "http://localhost:3003/todos/";

  const [text, setText] = useState(todos.text);
  const [isDone, setIsDone] = useState(todos.isDone);
  const [value, setValue] = useState(todos.text);
  const [isModify, setIsModify] = useState(false);
  const todoRef = useRef<HTMLInputElement | null>(null);

  const toggleIsDone = () => {
    axios
      .put(baseURL + `${todos.id}`, {
        ...todos,
        isDone: !isDone,
      })
      .then(() => {
        setIsDone(!isDone);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const toggleIsModify = () => {
    if (isDone) {
      setIsModify(isModify);
    } else {
      setIsModify(true);
      todoRef.current?.focus();
    }
  };

  const updateText = () => {
    axios.put(baseURL + `${todos.id}`, {
      ...todos,
      text: value,
    }).then(()=>{
      setText(value);
      setIsModify(false);
    }).catch((err)=>{
      alert(err);
    });
  };

  return (
    <S.TodoListItemContainer done={isDone}>
      <BsFillPatchCheckFill onClick={toggleIsDone} />
      {isModify ? (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={todoRef}
        />
      ) : (
        <span>{text}</span>
      )}
      <S.EditIconBox>
        {isModify ? (
          <HiMiniPencilSquare onClick={updateText} />
        ) : (
          <BiPencil onClick={toggleIsModify} />
        )}
        <BsTrash3Fill />
      </S.EditIconBox>
    </S.TodoListItemContainer>
  );
}

export default TodoListItem;
