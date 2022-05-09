import './App.scss';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Row } from './components/Row';
import requests from './config/Requests';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Programmes originaux Netflix" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Tendances actuelles" fetchUrl={requests.fetchTrending} />
      <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
      <Row title="Films d'actions" fetchUrl={requests.fetchActionMovies} />
      <Row title="Films d'horreur" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comédie" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />

      {/* quick view */}

      <Footer />
    </div>
  )
}

export default App;