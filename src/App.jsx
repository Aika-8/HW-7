import styled from "styled-components";
import { TodoForm } from "./components/TodoForm";
import { Login } from "./components/Login";
import { use, useState } from "react";

function App() {
  const [showTodo, setShowTodo] = useState(false);
  const handleShowTodo = () => {
    setShowTodo(true);
  };
  return (
    <StyledDiv>
      {!showTodo ? <Login onShowTodo={handleShowTodo} /> : <TodoForm />}
    </StyledDiv>
  );
}

export default App;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 1px 1px 1.5px 1.7px rgb(175, 174, 174);
  background-color: #ffffff
`;
