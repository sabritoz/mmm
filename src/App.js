import './App.css';
import Navbar from './components/componement/Navbar';
import Intro from './components/componement/Intro';
import Piece from './components/componement/Piece';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <h1 className='head'>About Chess pieces</h1>
      <Piece/>
      <button>Come and Play</button>
    </div>
  )
}

export default App;