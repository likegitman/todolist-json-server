import styled from "styled-components";

export const TodoInventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  height: 300px;

  &::-webkit-scrollbar {
    overflow: hidden;
  }
`;