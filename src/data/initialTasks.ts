import type { Task } from '../types/task';

export const initialTasks: Task[] = [
  {
    id: 1,
    title: 'React Components',
    description: 'Опрацювати базові принципи компонентів React та JSX',
    completed: false,
    priority: 'high',
    category: 'React',
  },
  {
    id: 2,
    title: 'TypeScript Exercises',
    description: 'Виконати практичні вправи з типізації props та state',
    completed: true,
    priority: 'medium',
    category: 'TypeScript',
  },
  {
    id: 3,
    title: 'SCSS & BEM Styling',
    description: 'Оформити компоненти за методологією Block__Element--Modifier',
    completed: false,
    priority: 'low',
    category: 'CSS',
  },
];
