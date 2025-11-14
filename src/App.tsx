// Resumate - Resume Builder Application
// Created for academic project
// Feel free to use for learning purposes
// For any questions: etherjoon@gmail.com

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CVProvider } from '@/context/CVContext';
import { AuthProvider } from '@/context/AuthContext';
import HomePage from '@/pages/HomePage';
import TemplatesPage from '@/pages/TemplatesPage';
import CVStartPage from '@/pages/CVStartPage';
import CVBuilderPage from '@/pages/CVBuilderPage';
import SignupPage from '@/pages/SignupPage';
import LoginPage from '@/pages/LoginPage';
import AboutPage from '@/pages/AboutPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

function App() {
  return (
    <AuthProvider>
      <CVProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/templates" element={<TemplatesPage />} />
                <Route path="/start" element={<CVStartPage />} />
                <Route path="/builder" element={<CVBuilderPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CVProvider>
    </AuthProvider>
  );
}

export default App;

