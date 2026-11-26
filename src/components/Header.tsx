import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Study Planner</h1>
        <p className="header__subtitle">Планувальник навчальних завдань на React + TypeScript</p>
      </div>
    </header>
  );
}
