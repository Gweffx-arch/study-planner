import type { FilterType, Task } from '../types/task';
import { TaskItem } from './TaskItem';
import './TaskList.scss';

interface TaskListProps {
  tasks: Task[];
  totalTasksCount: number;
  currentFilter: FilterType;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function TaskList({
  tasks,
  totalTasksCount,
  currentFilter,
  onToggleTask,
  onDeleteTask,
}: TaskListProps) {
  if (totalTasksCount === 0) {
    return (
      <div className="task-list__empty">
        <p className="task-list__empty-title">Завдань поки немає.</p>
        <p className="task-list__empty-text">Додайте перше навчальне завдання вище.</p>
      </div>
    );
  }

  if (tasks.length === 0 && currentFilter !== 'all') {
    return (
      <div className="task-list__empty">
        <p className="task-list__empty-title">За цим фільтром завдань немає.</p>
        <p className="task-list__empty-text">Оберіть інший режим фільтрації або додайте нове завдання.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}
