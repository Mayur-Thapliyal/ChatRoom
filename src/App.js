import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreenPage from './pages/HomeScreenPage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import HomePage from './pages/HomePage';
import ChatScreenPage from './pages/ChatScreenPage';


function App() { 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreenPage />}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LogInPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/chat' element={<ChatScreenPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
