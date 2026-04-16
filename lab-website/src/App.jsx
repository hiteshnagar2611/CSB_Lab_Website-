import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Research from './components/Research';
import Publications from './components/Publications';
import Resources from './components/Resources';
import News from './components/News';
import Team from './components/Team';
import Contact from './components/Contact';
import MemberBio from './components/MemberBio';

const App = () => {
    const location = useLocation();
    const isMemberBioPage = location.pathname.startsWith('/team/') && location.pathname !== '/team';

    return (
        <div className="min-h-screen bg-gray-50">
            {!isMemberBioPage && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/research" element={<Research />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/news" element={<News />} />
                <Route path="/team" element={<Team />} />
                <Route path="/team/:name" element={<MemberBio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            {!isMemberBioPage && <Footer />}
        </div>
    );
};

export default App;