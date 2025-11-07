import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from './components/layout/Sidebar.module.css';
import tb from './components/layout/Topbar.module.css';

export default function App() {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>Murabaha SaaS</div>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Дашборд
          </NavLink>
          <NavLink
            to="/deals"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Сделки
          </NavLink>
          <NavLink
            to="/clients"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Клиенты
          </NavLink>
          <NavLink
            to="/payments"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Платежи
          </NavLink>
          <NavLink
            to="/registry"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Реестр
          </NavLink>
          <NavLink
            to="/templates"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Шаблоны
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Настройки
          </NavLink>
        </nav>
      </aside>
      <div className={styles.content}>
        <header className={tb.topbar}>
          <input
            className={tb.search}
            placeholder="Поиск клиента/сделки/телефона"
          />
          <div className={tb.user}>RU · admin@you.com</div>
        </header>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
