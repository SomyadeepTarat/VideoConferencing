import LandingPage from "./pages/landing";
import Authentication from "./pages/authentication";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
    <BrowserRouter>
      
      <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
      </AuthProvider>

    </BrowserRouter>
    </>
  );
}

export default App;
