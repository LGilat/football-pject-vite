import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Countries from './components/Countries'
import Equipos from './components/Equipos'
import EquiposDetalles from './components/EquiposDetalles'
import Jugadores from './components/Jugadores'
import Estadios from './components/Estadios'
import Header from './components/Header'
import Leagues from './components/Leagues';
import TeamsLeague from './components/TeamsLeague';
import Players from './components/Players';
import AboutUs from './components/AboutUs';
import CountriesLeague from './components/CountriesLeague';
import AllCountryLeague from './components/AllCountryLeague';
import SearchPlayers from './components/SearchPlayers';
import PlayerDetails from './components/PlayerDetails';
import HonoursPlayer from './components/HonoursPlayer';
import FormerTeamPlayer from './components/FormerTeamPlayer';
import MilestonePlayer from './components/MilestonePlayer';


import './App.css'

function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        {/* Otras rutas */}
        <Route path="/equipos/:countryname" element={<Equipos />} />
        <Route path="/teamdetails/:teamname" element={<EquiposDetalles />} />
        <Route path="/jugadores/:teamname" element={<Jugadores />} />
        <Route path="/estadios/:estadio" element={<Estadios />} />
        <Route path="/leagues" element={<Leagues />} />
        <Route path="/teamsleague/:league" element={<TeamsLeague />} />
        <Route path="/players/" element={<Players />} />
        <Route path="/players/:idJugador" element={<PlayerDetails />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/countriesleague" element={<CountriesLeague />} />
        <Route path="/allcountryleague/:country" element={<AllCountryLeague />} />
        <Route path="/search/:query" element={<SearchPlayers />} />
        <Route path="/player/:idJugador/honours" element={<HonoursPlayer />} />
        <Route path="/player/:idJugador/former-teams" element={<FormerTeamPlayer />} />
        <Route path="/player/:idJugador/milestones" element={<MilestonePlayer />} />
        
      </Routes>
    </Router>
  )
}

export default App
