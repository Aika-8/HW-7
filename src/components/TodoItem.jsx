import React from "react";
import { Button } from "./UI/Button";
import styled from "styled-components";

export const TodoItem = ({ id, title, onDelete, onUpdate }) => {
  return (
    <>
      <StyledLi>
        <p>{title}</p>
        <StyledDivBtn>
          <Button variant="update" onClick={() => onUpdate(id)}>
            update
          </Button>
          <Button variant="delete" onClick={() => onDelete(id)}>
            delete
          </Button>
        </StyledDivBtn>
      </StyledLi>
    </>
  );
};
const StyledLi = styled.li`
  width: 600px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  border: 3px solid brown;
`;
const StyledDivBtn = styled.div`
  display: flex;
  gap: 10px;
`;
