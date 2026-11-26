import { useState } from 'react';
import { initialTasks } from './data/initialTasks';
import type { FilterType, Task } from './types/task';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskStats } from './components/TaskStats';
import { TaskFilters } from './components/TaskFilters';
import { TaskList } from './components/TaskList';
import './App.scss';

export function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<FilterType>('all');

  const handleAddTask = (newTaskData: Omit<Task, 'id' | 'completed'>) => {
    const newTask: Task = {
      ...newTaskData,
      id: Date.now(),
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const handleToggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <TaskForm onAddTask={handleAddTask} />
        <TaskStats tasks={tasks} />
        <div className="app__controls">
          <h2 className="app__section-title">Список завдань</h2>
          <TaskFilters currentFilter={filter} onFilterChange={setFilter} />
        </div>
        <TaskList
          tasks={filteredTasks}
          totalTasksCount={tasks.length}
          currentFilter={filter}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </main>
    </div>
  );
}

export default App;
