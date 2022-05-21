
import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/header/Header';
import HeroSection from './Components/header/HeroSection/HeroSection';

function App() {
    return (<div className="App">
        <Header></Header>
        <HeroSection></HeroSection>
        <Footer></Footer>

    </div>);
}

export default App;

