import './App.css';
import Maincomp from './components/Home/Maincomp';
import Navbar from './components/header/Navbar';
import Newnavbar from './components/newnavbar/Newnavbar';

function App() {
  return (
    <>
      <Navbar/>
      <Newnavbar/>
      <Maincomp/>
    </>
  );
}

export default App;
