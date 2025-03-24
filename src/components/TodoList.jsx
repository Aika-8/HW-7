import React from "react";
import { TodoItem } from "./TodoItem";
import styled from "styled-components";

export const TodoList = ({ array, onDelete, onUpdate }) => {
  return (
    <StyledUl>
      {array.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </StyledUl>
  );
};
const StyledUl = styled.ul`
  width: 100%;
  height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 50px 0px;
`;
