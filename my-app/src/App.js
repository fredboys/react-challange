import css from './App.module.css';
// import NavBarSimple from './components/NavbarSimple';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import Content from "./components/Content";

function App() {
  return (
    <div className={css.App}>
      {/* <NavBarSimple /> */}
      <Sidebar />
      <NavBarForm />
      <Content />
    </div>
  );
}


export default App; 