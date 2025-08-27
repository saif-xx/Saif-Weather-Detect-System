import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-chatbot-kit/build/main.css';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import { AuthProvider } from './components/AuthContext'; // Correct path (src/AuthContext.js)

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App d-flex flex-column min-vh-100">
          <Navbar />
          <Header />
          <main className="container mt-4 flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;