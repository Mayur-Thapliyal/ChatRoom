import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense,lazy } from 'react';

const HomeScreenPage = lazy(()=>import('./pages/HomeScreenPage'))
const SignUpPage = lazy(()=>import('./pages/SignUpPage'))
const LogInPage = lazy(()=>import('./pages/LogInPage'))
const HomePage = lazy(()=>import('./pages/HomePage'))
const ChatScreenPage = lazy(()=>import('./pages/ChatScreenPage'))



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
