import './App.css';
import { NavBar } from './components/navBar';
import { Policies } from './components/policies';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Route, Routes } from "react-router-dom";
import { ShowClothes } from './components/showClothes'
import {Background} from './components/background'

function App() {
  return (
			<>
				<div className="app">		
						<header className="appHeader">
						<NavBar />
						</header>
						<main className="appMain">
						<Background />
						<Routes>
							<Route path="/" element={<ShowClothes />}>
							</Route>	
							<Route path="/category/:id" element={<ShowClothes />} />
							<Route path="/about" element={<About />} />
							<Route path="/policies" element={<Policies />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>			
						</main>
						<footer className="appFootie">
							<Footer />
						</footer>
				</div>
			</>
  );
}

export default App;
