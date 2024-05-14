import AddTodo from 'components/AddTodo/AddTodo';
import Todo from 'components/Todo/Todo';
import { useTodos } from 'context/TodosContext';
import styles from './TodoList.module.css';
import { useState } from 'react';

export default function TodoList({ filter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { todos, dispatch } = useTodos();

  const handleAdd = (todo) => {
    dispatch({ type: 'ADD', todo });
  };

  const handleUpdate = (updated) => {
    dispatch({ type: 'UPDATE', updated });
  };

  const handleDelete = (deleted) => {
    dispatch({ type: 'DELETE', deleted });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  function getFilteredItems(filter, searchTerm) {
    if (filter === 'all') {
      if (!searchTerm) {
        return todos;
      } else {
        return todos.filter((todo) =>
          todo.text.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    } else {
      if (!searchTerm) {
        return todos.filter((todo) => todo.status === filter);
      } else {
        return todos
          .filter((todo) => todo.status === filter)
          .filter((todo) =>
            todo.text.toLowerCase().includes(searchTerm.toLowerCase())
          );
      }
    }
  }

  const filtered = getFilteredItems(filter, searchTerm);

  return (
    <section className={styles.container}>
      <input
        className={styles.searchInput}
        type='text'
        placeholder='검색...'
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className={styles.list}>
        {filtered.map((item) => {
          return (
            <Todo
              key={item.id}
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          );
        })}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
