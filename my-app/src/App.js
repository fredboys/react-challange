import css from './App.module.css';
// import NavBarSimple from './components/NavbarSimple';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';

function App() {
  return (
    <div className={css.App}>
      {/* <NavBarSimple /> */}
      <Sidebar />
      <NavBarForm />
    </div>
  );
}


export default App; 