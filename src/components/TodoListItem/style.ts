import styled from "styled-components";

export const TodoListItemContainer = styled.div<{done:boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.1rem;

  span {
    color: ${(props) => props.done ? "#999999" : "#000000"};
    text-decoration: ${(props) => props.done ? "line-through" : "none"};
    text-decoration-color: rgb(71, 225, 245);
  }

  & + & {
    margin-top: 25px;
  }

  svg {
    cursor: pointer;
    color: ${(props) => props.done ? "rgb(71, 225, 245)" : "#999999"};
    font-size: 1.3rem;
    transition: all 0.2s ease-out;

    &:hover {
        color: rgb(71, 225, 245)
    }
  }
`;

export const EditIconBox = styled.div`
  display: flex;
  svg {
    margin: 0 12px;

    &:nth-child(2) {
        &:hover {
            color: rgb(245, 99, 99);
        }
    }
  }
`;