import './App.css';
import {Background} from './components/background';
import { NavBar } from './components/navBar';
import { Policies } from './components/policies';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Route, Routes } from "react-router-dom";
import { ShowClothes } from './components/showClothes'

function App() {
  return (
			<>
				<div className="App">		
					<header className="App-header">
						<NavBar />						
					</header>
					<main className="Main-header">					
						<Background />
						<Routes>
							<Route path="/" element={<ShowClothes />} /> 
							<Route path="/about" element={<About />} />
							<Route path="/policies" element={<Policies />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>	
					</main>
					<footer className="App-footie">
						<Footer />
					</footer>
				</div>	
			</>
  );
}

export default App;
