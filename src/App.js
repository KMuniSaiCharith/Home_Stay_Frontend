import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/auth/SignUp';
import Login from './components/auth/Login';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';



const App = () => {
    

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/Register" element={<Signup />} />
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
