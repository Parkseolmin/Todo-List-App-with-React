import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';
import { FaPlus } from 'react-icons/fa';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onAdd({ id: uuidv4(), text, status: 'active' });
      setText('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type='text'
        value={text}
        placeholder='오늘 할 일'
        onChange={handleChange}
        className={styles.input}
      />
      <button className={styles.button}>
        <FaPlus />
      </button>
    </form>
  );
}
