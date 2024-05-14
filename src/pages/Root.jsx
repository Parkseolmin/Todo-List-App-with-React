import { TodosProvider } from 'context/TodosContext';
import { DarkModeProvider } from 'context/DarkModeContext';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <DarkModeProvider>
      <TodosProvider>
        <Navbar />
        <Outlet />
      </TodosProvider>
    </DarkModeProvider>
  );
}
