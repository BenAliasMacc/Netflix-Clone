import { Home } from './components/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Video } from './components/Video';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  )
}

export default App;