import "./App.css";
import { Link, NavLink, Outlet } from "react-router";

function App() {
  return (
    <>
      <section className="flex flex-row justify-between ">
        <header>
          <Link to="/">
            <h1>Wild Series</h1>
          </Link>
        </header>
        <nav className="navbar">
          <ul className="flex flex-row gap-4">
            <li>
              <NavLink to="/categories">Catégories</NavLink>
            </li>
            <li>
              <NavLink to="/programs">Séries</NavLink>
            </li>
          </ul>
        </nav>
      </section>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
