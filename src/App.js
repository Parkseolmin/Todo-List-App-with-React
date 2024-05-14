import { useState } from 'react';
import Header from 'components/Header/Header';
import TodoList from 'components/TodoList/TodoList';

export default function App() {
  const filters = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}
