import './App.scss';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav />

      <Banner />
      <div className='test'></div>
      {/* rows */}

      {/* quick view */}

      <Footer />
    </div>
  );
}

export default App;
