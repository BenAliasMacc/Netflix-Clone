import React from 'react'
import { Nav } from './Nav'
import { Banner } from './Banner'
import { Row } from './Row'
import { Footer } from './Footer'
import requests from '../config/Requests'


export const Home = () => {
  return (
      <>
        <Nav />
        <Banner />,
        <Row title="Programmes originaux Netflix" fetchUrl={requests.fetchNetflixOriginals} isPoster={true} />
        <Row title="Tendances actuelles" fetchUrl={requests.fetchTrending}/>
        <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
        <Row title="Films d'actions" fetchUrl={requests.fetchActionMovies} />
        <Row title="Films d'horreur" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Comédie" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />      
        <Footer />
      </>
  )
}
