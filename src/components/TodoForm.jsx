import React, { useState } from "react";
import { Button } from "./UI/Button";
import styled from "styled-components";
import { TodoList } from "./TodoList";
import { Modal } from "./UI/Modal";

export const TodoForm = () => {
  const [inputValues, setInputValues] = useState("");
  const [newValue, setNewValue] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const handleTodo = (e) => {
    e.preventDefault();
    if (!inputValues) return;
    const newTodo = {
      id: Date.now().toString(),
      title: inputValues,
    };
    setNewValue([...newValue, newTodo]);
    setInputValues("");
  };
  const handleDelete = () => {
    setNewValue(newValue.filter((item) => item.id !== todoId));
    setOpenModal(false);
  };
  const handleUpdate = (id) => {
    const finded = newValue.find((item) => item.id === id);
    setInputValues(finded.title);
    setNewValue(newValue.filter((item) => item.id !== id));
  };
  const handleOpen = (id) => {
    setOpenModal(!openModal);
    setTodoId(id);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <StyledForm onSubmit={handleTodo}>
        <StyledInput
          type="text"
          placeholder="Enter your todo..."
          value={inputValues}
          onChange={(e) => setInputValues(e.target.value)}
        />
        <Button variant="add" type="submit">
          add
        </Button>
      </StyledForm>
      <TodoList
        array={newValue}
        onDelete={handleOpen}
        onUpdate={handleUpdate}
      />
      {openModal && (
        <Modal onClose={handleClose}>
          <StyledDivModal>
            <h2>Do you really want to delete?</h2>
            <StyledDivModalBtn>
              <Button variant="YesNo" onClick={handleDelete}>Yes</Button>
              <Button  variant="YesNo" onClick={handleClose}>No</Button>
            </StyledDivModalBtn>
          </StyledDivModal>
        </Modal>
      )}
    </>
  );
};
const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;
const StyledInput = styled.input`
  width: 350px;
  height: 40px;
  padding-left: 10px;
  color: #6f6f6f;
  font-size: 14px;
  font-weight: 600;
  border: 3px solid brown;
  outline: none;
`;
const StyledDivModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;
const StyledDivModalBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;