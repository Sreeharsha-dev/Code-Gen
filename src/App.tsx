import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { EditorPage } from './pages/Editor';
import { AuthPage } from './pages/Auth';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;