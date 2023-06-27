import styled from "styled-components";

export const PostTodoContainer = styled.div`

  width: 100%;
  height: 7vh;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 90%;
    height: 100%;
    outline: none;
    border: none;
    border: 2px solid #000000;
    border-radius: 5px;
    padding-left: 10px;
  }

  svg {
    font-size: 1.7rem;
    color: #999999;
    transform: rotate(90deg);
    cursor: pointer;
    transition: all 0.2s ease-out;

    &:hover {
        color: rgb(71, 225, 245)
    }
  }
`;
