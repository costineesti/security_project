import './App.css'
import logo from '../logo.svg'
import Header from './Header'
import AppContent from './AppContent';
import Security from './Security';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';


function App(){
    return(
        <div>
            <Header pageTitle="Frontend Auth with JWT" logoSrc={logo} />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <Router>
                            <AppContent />
                            <Routes>
                                <Route exact path="/register" element={<Security/>}/>
                                <Route exact path="/login" element={<Login/>}/>
                            </Routes>
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;