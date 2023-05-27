import './App.css';
import Maincomp from './components/Home/Maincomp';
import Navbar from './components/header/Navbar';
import Footer from './components/header/footer/footer';
import Newnavbar from './components/newnavbar/Newnavbar';

function App() {
  return (
    <>
      <Navbar/>
      <Newnavbar/>
      <Maincomp/>
      <Footer/>
    </>
  );
}

export default App;
