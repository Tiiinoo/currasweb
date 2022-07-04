import './App.css';
import {Background} from './components/background';
import { NavBar } from './components/navBar';
import { MainThing } from './components/mainThing';
import { Shop } from './components/shop';
import { Accesories } from './components/accesories';
import { Hat } from './components/hat';
import { Policies } from './components/policies';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Switch, Route, Routes } from "react-router-dom";
import { ClothesData } from './components/clothesData'

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
							<Route path="/"	element={<MainThing slides={ ClothesData } />} />
							<Route path="/shop"	element={<Shop />} />
							<Route path="/accesories"	element={<Accesories />} />
							<Route path="/hat"	element={<Hat />} />
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
