import { Input, Button } from 'antd';
import { useTodos } from 'context/TodosContext';
import { useState } from 'react';
const { TextArea } = Input;
export const UserInput = ({ onSubmit }) => {
  const [userInput, setUserInput] = useState('');
  const handleUsrInput = (e) => {
    setUserInput(e.target.value);
  };
  const { todos } = useTodos();
  let todolist = todos.map((todo) => todo.text);
  console.log('todolist', todolist);
  const handleTodoClick = () => {
    onSubmit(todolist);
  };
  const handleClick = () => {
    onSubmit(userInput);
  };

  return (
    <>
      <TextArea
        value={userInput}
        onChange={handleUsrInput}
        placeholder='오늘 일어난 일들을 간단히 적어주세요.'
      />
      <div style={{ display: 'flex' }}>
        <Button
          // loading={isLoading}
          onClick={handleTodoClick}
          style={{
            height: '50px',
            margin: '0 auto',
            backgroundColor: 'var(--ccolor-background-light)',
            border: '2px solid var(--color-background-light)',
            boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)',
            color: 'var(--color-text)',
            fontWeight: 'bold',
            borderRadius: '1rem',
            marginTop: '1rem',
          }}
        >
          투두리스트에 대해서
        </Button>
        <Button
          // loading={isLoading}
          onClick={handleClick}
          style={{
            height: '50px',
            margin: '0 auto',
            backgroundColor: 'var(--ccolor-background-light)',
            border: '2px solid var(--color-background-light)',
            boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)',
            color: 'var(--color-text)',
            fontWeight: 'bold',
            borderRadius: '1rem',
            marginTop: '1rem',
          }}
        >
          GPT에게 전달하기
        </Button>
      </div>
    </>
  );
};
