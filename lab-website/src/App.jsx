import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Resources from './components/Resources';
import News from './components/News';
import Team from './components/Team';
import Contact from './components/Contact';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/news" element={<News />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;