import { useState, type FormEvent } from 'react';
import type { Task, TaskPriority } from '../types/task';
import './TaskForm.scss';

interface TaskFormProps {
  onAddTask: (newTask: Omit<Task, 'id' | 'completed'>) => void;
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('React');
  const [priority, setPriority] = useState<TaskPriority>('medium');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setError('Назва завдання є обов’язковою');
      return;
    }

    onAddTask({
      title: trimmedTitle,
      description: description.trim() || 'Без додаткового опису',
      category: category.trim() || 'Загальне',
      priority,
    });

    setTitle('');
    setDescription('');
    setCategory('React');
    setPriority('medium');
    setError('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <h2 className="task-form__title">Нове навчальне завдання</h2>

      <div className="task-form__grid">
        <div className="task-form__field task-form__field--full">
          <label className="task-form__label" htmlFor="task-title">
            Назва *
          </label>
          <input
            id="task-title"
            className="task-form__input"
            type="text"
            placeholder="Наприклад: Вивчити hook useState"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (error) setError('');
            }}
          />
        </div>

        <div className="task-form__field">
          <label className="task-form__label" htmlFor="task-category">
            Категорія
          </label>
          <input
            id="task-category"
            className="task-form__input"
            type="text"
            placeholder="React, TypeScript, CSS..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="task-form__field">
          <label className="task-form__label" htmlFor="task-priority">
            Пріоритет
          </label>
          <select
            id="task-priority"
            className="task-form__select"
            value={priority}
            onChange={(e) => setPriority(e.target.value as TaskPriority)}
          >
            <option value="low">Низький (low)</option>
            <option value="medium">Середній (medium)</option>
            <option value="high">Високий (high)</option>
          </select>
        </div>

        <div className="task-form__field task-form__field--full">
          <label className="task-form__label" htmlFor="task-description">
            Опис
          </label>
          <textarea
            id="task-description"
            className="task-form__textarea"
            placeholder="Короткий опис навчального завдання..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      {error && <p className="task-form__error">{error}</p>}

      <div className="task-form__actions">
        <button className="task-form__submit" type="submit">
          Додати
        </button>
      </div>
    </form>
  );
}
