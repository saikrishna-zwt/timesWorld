import React from 'react'
import './App.css';
import LoginPage from './components/Pages/loginPage';
import HomePage from './components/Pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <LoginPage />}></Route>
        <Route exact path="/countryList" element={ <HomePage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
